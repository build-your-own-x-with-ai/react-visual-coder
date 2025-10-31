export enum BlockCategory {
    MOTION = 'Motion',
    LOOKS = 'Looks',
    CONTROL = 'Control',
    PEN = 'Pen',
    VARIABLES = 'Variables',
}

export type BlockType = 
    | 'MOVE' 
    | 'TURN_RIGHT' 
    | 'TURN_LEFT'
    | 'GOTO_XY'
    | 'POINT_IN_DIRECTION'
    | 'SAY' 
    | 'SAY_FOR_SECONDS' 
    | 'REPEAT'
    | 'PEN_DOWN'
    | 'PEN_UP'
    | 'SET_PEN_COLOR'
    | 'SET_PEN_SIZE'
    | 'CLEAR_ALL'
    | 'SET_VARIABLE'
    | 'CHANGE_VARIABLE';

export interface BlockDefinition {
    type: BlockType;
    label: string;
    category: BlockCategory;
    params: { name: string; type: 'number' | 'text' | 'color'; defaultValue: number | string }[];
}

export interface ScriptBlock {
    id: string;
    type: BlockType;
    params: { [key: string]: number | string };
    children?: ScriptBlock[]; 
}

export interface SpriteState {
    x: number;
    y: number;
    rotation: number;
    message: string;
    isVisible: boolean;
    pen: {
        isDown: boolean;
        color: string;
        size: number;
    };
}

export type Variables = { [key: string]: number | string };
