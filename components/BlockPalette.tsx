import React from 'react';
import { AVAILABLE_BLOCKS, BLOCK_COLORS } from '../constants';
import { BlockCategory, BlockDefinition } from '../types';

interface BlockPaletteProps {
    onDragStart: (e: React.DragEvent, block: BlockDefinition) => void;
}

interface BlockComponentProps {
    block: BlockDefinition;
    onDragStart: (e: React.DragEvent, block: BlockDefinition) => void;
}

const Block: React.FC<BlockComponentProps> = ({ block, onDragStart }) => {
    const color = BLOCK_COLORS[block.category];
    
    const labelParts = block.label.split('{}');

    return (
        <div
            draggable
            onDragStart={(e) => onDragStart(e, block)}
            className={`flex items-center text-white text-sm font-bold p-2 rounded-md shadow-sm cursor-pointer transition-transform transform hover:scale-105 ${color} mb-2 flex-wrap`}
        >
            {labelParts.map((part, index) => (
                <React.Fragment key={index}>
                    <span>{part}</span>
                    {index < labelParts.length - 1 && (
                        <div className="bg-white/80 rounded px-2 py-0.5 text-black text-xs mx-1 font-normal">
                          {block.params[index]?.defaultValue}
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};


const BlockPalette: React.FC<BlockPaletteProps> = ({ onDragStart }) => {
    const categories = Object.values(BlockCategory);

    return (
        <div className="w-64 bg-gray-50 p-4 overflow-y-auto h-full border-r border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-700">Blocks</h2>
            {categories.map(category => (
                <div key={category} className="mb-6">
                    <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">{category}</h3>
                    {AVAILABLE_BLOCKS
                        .filter(block => block.category === category)
                        .map(block => (
                            <Block key={block.type} block={block} onDragStart={onDragStart} />
                        ))
                    }
                </div>
            ))}
        </div>
    );
};

export default BlockPalette;