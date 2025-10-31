import React, { useEffect } from 'react';
import { SpriteState } from '../types';
import { PlayIcon, StopIcon, FlagIcon, CatSprite } from './icons';
import DemoLibrary from './DemoLibrary';
import VariableManager from './VariableManager';
import { ScriptBlock, Variables } from '../types';

interface StageProps {
    spriteState: SpriteState;
    isRunning: boolean;
    variables: Variables;
    onRun: () => void;
    onStop: () => void;
    onReset: () => void;
    canvasRef: React.RefObject<HTMLCanvasElement>;
    loadDemo: (script: ScriptBlock[]) => void;
}

const Stage: React.FC<StageProps> = ({ spriteState, isRunning, variables, onRun, onStop, onReset, canvasRef, loadDemo }) => {
    const { x, y, rotation, message, isVisible } = spriteState;

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = canvas?.parentElement;
        if (canvas && container) {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        }
    }, [canvasRef]);

    return (
        <div className="w-[480px] bg-gray-50 p-4 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
                <button onClick={onRun} disabled={isRunning} className="flex items-center gap-2 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors disabled:bg-gray-400">
                    <FlagIcon className="w-5 h-5" />
                    Go
                </button>
                <button onClick={onStop} disabled={!isRunning} className="flex items-center gap-2 bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition-colors disabled:bg-gray-400">
                    <StopIcon className="w-5 h-5" />
                    Stop
                </button>
                 <button onClick={onReset} className="ml-auto text-gray-500 hover:text-gray-700 text-sm font-semibold">
                    Reset
                </button>
            </div>
            <div className="relative flex-1 bg-white border-2 border-gray-200 rounded-lg overflow-hidden mb-4">
                <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
                
                {isVisible && (
                    <div
                        className="absolute transition-all duration-50"
                        style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% - ${y}px)`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                         <CatSprite rotation={rotation} />

                        {message && (
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10">
                                <div className="bg-purple-500 text-white text-sm rounded-lg py-1 px-3 shadow-md relative">
                                    {message}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-purple-500"></div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
             <div className="flex gap-4">
                <DemoLibrary loadDemo={loadDemo} />
                <VariableManager variables={variables} />
            </div>
        </div>
    );
};

export default Stage;