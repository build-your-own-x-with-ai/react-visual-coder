import React from 'react';
import { AVAILABLE_BLOCKS, BLOCK_COLORS, isControlBlock } from '../constants';
import { ScriptBlock, BlockDefinition } from '../types';
import { FlagIcon, TrashIcon } from './icons';

interface ScriptAreaProps {
    blocks: ScriptBlock[];
    setBlocks: React.Dispatch<React.SetStateAction<ScriptBlock[]>>;
    onDrop: (e: React.DragEvent) => void;
    onDragOver: (e: React.DragEvent) => void;
    addNestedBlock: (newBlock: ScriptBlock, parentId: string) => void;
    onRun: () => void;
}

interface ScriptBlockComponentProps {
    block: ScriptBlock;
    setBlocks: React.Dispatch<React.SetStateAction<ScriptBlock[]>>;
    addNestedBlock: (newBlock: ScriptBlock, parentId: string) => void;
}

const ScriptBlockComponent: React.FC<ScriptBlockComponentProps> = ({ block, setBlocks, addNestedBlock }) => {
    const blockDef = AVAILABLE_BLOCKS.find(b => b.type === block.type);
    if (!blockDef) return null;

    const color = BLOCK_COLORS[blockDef.category];
    const labelParts = blockDef.label.split('{}');

    const handleParamChange = (paramName: string, value: string) => {
        const updateRecursively = (blocks: ScriptBlock[]): ScriptBlock[] => {
            return blocks.map(b => {
                if (b.id === block.id) {
                    const newBlock = { ...b };
                    newBlock.params = { ...newBlock.params, [paramName]: value };
                    return newBlock;
                }
                if (b.children) {
                    return { ...b, children: updateRecursively(b.children) };
                }
                return b;
            });
        };
        setBlocks(prevBlocks => updateRecursively(prevBlocks));
    };
    
    const handleDelete = () => {
        const deleteRecursively = (blocks: ScriptBlock[]): ScriptBlock[] => {
            return blocks.filter(b => b.id !== block.id).map(b => {
                if (b.children) {
                    return { ...b, children: deleteRecursively(b.children) };
                }
                return b;
            });
        };
        setBlocks(prevBlocks => deleteRecursively(prevBlocks));
    };

    const allowDrop = (e: React.DragEvent) => e.preventDefault();

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const blockDefinition = JSON.parse(e.dataTransfer.getData('application/json')) as BlockDefinition;
        if (blockDefinition) {
            const newBlock: ScriptBlock = {
                id: `${blockDefinition.type}-${Date.now()}`,
                type: blockDefinition.type,
                params: blockDefinition.params.reduce((acc, param) => {
                    acc[param.name] = param.defaultValue;
                    return acc;
                }, {} as { [key: string]: string | number }),
            };
            addNestedBlock(newBlock, block.id);
        }
    };

    const renderInput = (paramIndex: number) => {
        const paramDef = blockDef.params[paramIndex];
        const value = block.params[paramDef.name] ?? '';

        let inputType: React.HTMLInputTypeAttribute = paramDef.type === 'color' ? 'color' : 'text';
        if (paramDef.type === 'number') {
            // If it's a number-type param but the value is an expression (a string that isn't a valid number),
            // use a text input to display it. Otherwise, use a number input for the stepper UI.
            if (typeof value === 'string' && value.trim() !== '' && isNaN(Number(value))) {
                inputType = 'text';
            } else {
                inputType = 'number';
            }
        }

        return (
             <input
                type={inputType}
                value={value}
                onChange={(e) => handleParamChange(paramDef.name, e.target.value)}
                className={`bg-white/90 rounded px-1 py-0.5 text-black text-xs mx-1 w-auto min-w-[3rem] max-w-[10rem] text-center outline-none focus:ring-2 focus:ring-white ${paramDef.type === 'color' ? 'p-0 h-5' : ''}`}
                onClick={(e) => e.stopPropagation()}
            />
        )
    };


    return (
        <div className={`text-white text-sm font-bold rounded-md shadow-sm ${color} mb-1 `}>
            <div className="flex items-center p-2 relative group flex-wrap">
                {labelParts.map((part, i) => (
                    <React.Fragment key={i}>
                        <span>{part}</span>
                        {i < labelParts.length - 1 && renderInput(i)}
                    </React.Fragment>
                ))}
                <button onClick={handleDelete} className="absolute -right-2 -top-2 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <TrashIcon className="w-3 h-3 text-white" />
                </button>
            </div>
            {isControlBlock(block.type) && (
                <div className="ml-4 p-2 border-l-4 border-black/20" onDrop={handleDrop} onDragOver={allowDrop}>
                    {block.children && block.children.map(child => (
                        <ScriptBlockComponent key={child.id} block={child} setBlocks={setBlocks} addNestedBlock={addNestedBlock} />
                    ))}
                    {!block.children?.length && (
                        <div className="h-4 bg-black/10 rounded-sm"></div>
                    )}
                </div>
            )}
        </div>
    );
};

const ScriptArea: React.FC<ScriptAreaProps> = ({ blocks, setBlocks, onDrop, onDragOver, addNestedBlock, onRun }) => {
    return (
        <div
            className="flex-1 bg-white p-4 overflow-y-auto h-full"
            onDrop={onDrop}
            onDragOver={onDragOver}
        >
            <div className="flex items-center mb-4">
                 <button onClick={onRun} className="flex items-center gap-2 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors">
                    <FlagIcon className="w-5 h-5" />
                    When clicked
                </button>
            </div>
            
            <div className="space-y-1">
                {blocks.length > 0 ? (
                    blocks.map((block) => (
                        <ScriptBlockComponent key={block.id} block={block} setBlocks={setBlocks} addNestedBlock={addNestedBlock} />
                    ))
                ) : (
                    <div className="text-center text-gray-400 p-8 border-2 border-dashed border-gray-300 rounded-lg">
                        <p>Drag blocks here to build your script!</p>
                        <p className="text-sm mt-2">Try loading a demo to start.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScriptArea;