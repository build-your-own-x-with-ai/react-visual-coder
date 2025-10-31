import React, { useState, useRef, useCallback } from 'react';
import BlockPalette from './components/BlockPalette';
import ScriptArea from './components/ScriptArea';
import Stage from './components/Stage';
import { ScriptBlock, SpriteState, BlockDefinition, Variables } from './types';
import { executeScript } from './services/executionService';

const INITIAL_SPRITE_STATE: SpriteState = {
    x: 0,
    y: 0,
    rotation: 0,
    message: '',
    isVisible: true,
    pen: {
        isDown: false,
        color: '#0000FF',
        size: 2,
    }
};

const App: React.FC = () => {
    const [scriptBlocks, setScriptBlocks] = useState<ScriptBlock[]>([]);
    const [spriteState, setSpriteState] = useState<SpriteState>(INITIAL_SPRITE_STATE);
    const [variables, setVariables] = useState<Variables>({});
    const [isRunning, setIsRunning] = useState(false);
    
    const stopSignal = useRef(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const getCanvasContext = useCallback(() => {
        const canvas = canvasRef.current;
        return canvas ? canvas.getContext('2d') : null;
    }, []);

    const clearCanvas = useCallback(() => {
        const ctx = getCanvasContext();
        if (ctx) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
    }, [getCanvasContext]);

    const runScript = useCallback(async () => {
        if (isRunning) return;
        
        stopSignal.current = false;
        setIsRunning(true);
        setSpriteState(prevState => ({ ...prevState, message: '' }));

        try {
            await executeScript(scriptBlocks, setSpriteState, variables, setVariables, getCanvasContext, stopSignal);
        } catch (error) {
            console.error("Script execution failed:", error);
        } finally {
            setIsRunning(false);
            stopSignal.current = false;
        }
    }, [isRunning, scriptBlocks, variables, getCanvasContext]);

    const stopScript = () => {
        stopSignal.current = true;
        setIsRunning(false);
        setSpriteState(prevState => ({ ...prevState, message: '' }));
    };

    const resetStage = () => {
        stopScript();
        setSpriteState(INITIAL_SPRITE_STATE);
        setVariables({});
        clearCanvas();
    };

    const handleDragStart = (e: React.DragEvent, block: BlockDefinition) => {
        e.dataTransfer.setData('application/json', JSON.stringify(block));
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
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
            setScriptBlocks(prev => [...prev, newBlock]);
        }
    };
    
    const addNestedBlock = (newBlock: ScriptBlock, parentId: string) => {
        const findAndAdd = (blocks: ScriptBlock[]): ScriptBlock[] => {
            return blocks.map(b => {
                if (b.id === parentId) {
                    return {
                        ...b,
                        children: [...(b.children || []), newBlock]
                    };
                }
                if (b.children) {
                    return { ...b, children: findAndAdd(b.children) };
                }
                return b;
            });
        };
        setScriptBlocks(prev => findAndAdd(prev));
    };
    
    const loadDemo = (script: ScriptBlock[]) => {
        resetStage();
        setScriptBlocks(script);
    };

    return (
        <div className="flex h-screen w-screen font-sans bg-gray-100">
            <div className="flex flex-1 overflow-hidden">
                <BlockPalette onDragStart={handleDragStart} />
                <ScriptArea 
                    blocks={scriptBlocks} 
                    setBlocks={setScriptBlocks}
                    onDrop={handleDrop} 
                    onDragOver={handleDragOver} 
                    addNestedBlock={addNestedBlock}
                    onRun={runScript}
                />
            </div>
            <Stage
                spriteState={spriteState}
                isRunning={isRunning}
                variables={variables}
                onRun={runScript}
                onStop={stopScript}
                onReset={resetStage}
                canvasRef={canvasRef}
                loadDemo={loadDemo}
            />
        </div>
    );
};

export default App;