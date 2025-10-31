import React from 'react';
import { Variables } from '../types';

interface VariableManagerProps {
    variables: Variables;
}

const VariableManager: React.FC<VariableManagerProps> = ({ variables }) => {
    const variableEntries = Object.entries(variables);

    return (
        <div className="bg-white p-3 rounded-lg border-2 border-gray-200 flex-1">
            <h3 className="font-bold text-gray-700 mb-2 text-center">Variables</h3>
            <div className="space-y-1 text-sm">
                {variableEntries.length > 0 ? (
                    variableEntries.map(([name, value]) => (
                        <div key={name} className="flex justify-between items-center bg-red-100 rounded px-2 py-0.5">
                            <span className="font-mono text-red-800">{name}</span>
                            <span className="font-mono font-bold bg-white text-red-900 px-1 rounded">{String(value)}</span>
                        </div>
                    ))
                ) : (
                    <p className="text-xs text-gray-400 text-center">No variables set.</p>
                )}
            </div>
        </div>
    );
};

export default VariableManager;
