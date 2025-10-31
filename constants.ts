import { BlockCategory, BlockDefinition } from './types';

export const AVAILABLE_BLOCKS: BlockDefinition[] = [
    // Motion
    {
        type: 'MOVE',
        label: 'move {} steps',
        category: BlockCategory.MOTION,
        params: [{ name: 'steps', type: 'number', defaultValue: 10 }],
    },
    {
        type: 'TURN_RIGHT',
        label: 'turn right {} degrees',
        category: BlockCategory.MOTION,
        params: [{ name: 'degrees', type: 'number', defaultValue: 15 }],
    },
    {
        type: 'TURN_LEFT',
        label: 'turn left {} degrees',
        category: BlockCategory.MOTION,
        params: [{ name: 'degrees', type: 'number', defaultValue: 15 }],
    },
    {
        type: 'GOTO_XY',
        label: 'go to x: {} y: {}',
        category: BlockCategory.MOTION,
        params: [
            { name: 'x', type: 'number', defaultValue: 0 },
            { name: 'y', type: 'number', defaultValue: 0 },
        ],
    },
    {
        type: 'POINT_IN_DIRECTION',
        label: 'point in direction {}',
        category: BlockCategory.MOTION,
        params: [{ name: 'direction', type: 'number', defaultValue: 90 }],
    },
    // Looks
    {
        type: 'SAY',
        label: 'say {}',
        category: BlockCategory.LOOKS,
        params: [{ name: 'message', type: 'text', defaultValue: 'Hello!' }],
    },
    {
        type: 'SAY_FOR_SECONDS',
        label: 'say {} for {} seconds',
        category: BlockCategory.LOOKS,
        params: [
            { name: 'message', type: 'text', defaultValue: 'Hmm...' },
            { name: 'seconds', type: 'number', defaultValue: 2 },
        ],
    },
    // Control
    {
        type: 'REPEAT',
        label: 'repeat {} times',
        category: BlockCategory.CONTROL,
        params: [{ name: 'times', type: 'number', defaultValue: 4 }],
    },
    // Pen
    {
        type: 'CLEAR_ALL',
        label: 'clear all',
        category: BlockCategory.PEN,
        params: [],
    },
    {
        type: 'PEN_DOWN',
        label: 'pen down',
        category: BlockCategory.PEN,
        params: [],
    },
    {
        type: 'PEN_UP',
        label: 'pen up',
        category: BlockCategory.PEN,
        params: [],
    },
    {
        type: 'SET_PEN_COLOR',
        label: 'set pen color to {}',
        category: BlockCategory.PEN,
        params: [{ name: 'color', type: 'color', defaultValue: '#0000FF' }],
    },
    {
        type: 'SET_PEN_SIZE',
        label: 'set pen size to {}',
        category: BlockCategory.PEN,
        params: [{ name: 'size', type: 'number', defaultValue: 2 }],
    },
    // Variables
    {
        type: 'SET_VARIABLE',
        label: 'set {} to {}',
        category: BlockCategory.VARIABLES,
        params: [
            { name: 'variable', type: 'text', defaultValue: 'my variable' },
            { name: 'value', type: 'text', defaultValue: 0 },
        ],
    },
    {
        type: 'CHANGE_VARIABLE',
        label: 'change {} by {}',
        category: BlockCategory.VARIABLES,
        params: [
            { name: 'variable', type: 'text', defaultValue: 'my variable' },
            { name: 'value', type: 'number', defaultValue: 1 },
        ],
    },
];

export const BLOCK_COLORS: { [key in BlockCategory]: string } = {
    [BlockCategory.MOTION]: 'bg-blue-500 hover:bg-blue-600',
    [BlockCategory.LOOKS]: 'bg-purple-500 hover:bg-purple-600',
    [BlockCategory.CONTROL]: 'bg-orange-500 hover:bg-orange-600',
    [BlockCategory.PEN]: 'bg-teal-500 hover:bg-teal-600',
    [BlockCategory.VARIABLES]: 'bg-red-500 hover:bg-red-600',
};

export function isControlBlock(type: string): boolean {
    return type === 'REPEAT';
}
