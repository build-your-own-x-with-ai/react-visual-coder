import React from 'react';
import { DEMO_SCRIPTS } from '../constants/demos';
import { ScriptBlock } from '../types';

interface DemoLibraryProps {
    loadDemo: (script: ScriptBlock[]) => void;
}

const DemoLibrary: React.FC<DemoLibraryProps> = ({ loadDemo }) => {
    return (
        <div className="bg-white p-3 rounded-lg border-2 border-gray-200 flex-1 flex flex-col min-h-0">
            <h3 className="font-bold text-gray-700 mb-2 text-center flex-shrink-0">Demos</h3>
            <div className="grid grid-cols-3 gap-2 overflow-y-auto pr-2">
                {DEMO_SCRIPTS.map(demo => (
                    <button
                        key={demo.name}
                        onClick={() => loadDemo(JSON.parse(JSON.stringify(demo.script)))} // Deep copy
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                    >
                        {demo.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DemoLibrary;