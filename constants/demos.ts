import { ScriptBlock } from '../types';

export const DEMO_SCRIPTS: { name: string; script: ScriptBlock[] }[] = [
    {
        name: 'Polygon Drawer',
        script: [
            {
                id: '1', type: 'SET_VARIABLE', params: { variable: 'sides', value: 6 },
            },
            {
                id: '2', type: 'SET_VARIABLE', params: { variable: 'length', value: 50 },
            },
            {
                id: '3', type: 'CLEAR_ALL', params: {}
            },
            {
                id: '4', type: 'PEN_DOWN', params: {}
            },
            {
                id: '5',
                type: 'REPEAT',
                params: { times: 'sides' },
                children: [
                    {
                        id: '5-1', type: 'MOVE', params: { steps: 'length' }
                    },
                    {
                        id: '5-2', type: 'TURN_RIGHT', params: { degrees: '360 / sides' }
                    },
                ],
            },
            {
                id: '6', type: 'PEN_UP', params: {}
            },
        ],
    },
    {
        name: 'Fractal Tree',
        script: [
            { id: 'ft-1', type: 'CLEAR_ALL', params: {} },
            { id: 'ft-2', type: 'GOTO_XY', params: { x: 0, y: -150 } },
            { id: 'ft-3', type: 'POINT_IN_DIRECTION', params: { direction: 0 } },
            { id: 'ft-4', type: 'SET_VARIABLE', params: { variable: 'size', value: 50 } },
            { id: 'ft-5', type: 'PEN_DOWN', params: {} },
            { id: 'ft-6', type: 'SET_PEN_COLOR', params: { color: '#8B4513' } },
            { id: 'ft-7', type: 'SET_PEN_SIZE', params: { size: 'size / 5' } },
            { id: 'ft-8', type: 'MOVE', params: { steps: 'size' } },
            { id: 'ft-9', type: 'TURN_RIGHT', params: { degrees: 25 } },
            { id: 'ft-10', type: 'SET_PEN_SIZE', params: { size: 'size / 8' } },
            { id: 'ft-11', type: 'MOVE', params: { steps: 'size * 0.7' } },
            { id: 'ft-12', type: 'TURN_RIGHT', params: { degrees: 25 } },
            { id: 'ft-13', type: 'SET_PEN_SIZE', params: { size: 'size / 12' } },
            { id: 'ft-14', type: 'MOVE', params: { steps: 'size * 0.5' } },
            { id: 'ft-15', type: 'MOVE', params: { steps: '-size * 0.5' } }, 
            { id: 'ft-16', type: 'TURN_LEFT', params: { degrees: 50 } },
            { id: 'ft-17', type: 'MOVE', params: { steps: 'size * 0.5' } },
            { id: 'ft-18', type: 'MOVE', params: { steps: '-size * 0.5' } }, 
            { id: 'ft-19', type: 'TURN_RIGHT', params: { degrees: 25 } }, 
            { id: 'ft-20', type: 'MOVE', params: { steps: '-size * 0.7' } },
            { id: 'ft-21', type: 'TURN_LEFT', params: { degrees: 50 } },
            { id: 'ft-22', type: 'SET_PEN_SIZE', params: { size: 'size / 8' } },
            { id: 'ft-23', type: 'MOVE', params: { steps: 'size * 0.7' } },
            { id: 'ft-24', type: 'TURN_RIGHT', params: { degrees: 25 } },
            { id: 'ft-25', type: 'SET_PEN_SIZE', params: { size: 'size / 12' } },
            { id: 'ft-26', type: 'MOVE', params: { steps: 'size * 0.5' } },
            { id: 'ft-27', type: 'MOVE', params: { steps: '-size * 0.5' } },
            { id: 'ft-28', type: 'TURN_LEFT', params: { degrees: 50 } },
            { id: 'ft-29', type: 'MOVE', params: { steps: 'size * 0.5' } },
            { id: 'ft-30', 'type': 'MOVE', params: { steps: '-size * 0.5' } },
            { id: 'ft-31', 'type': 'TURN_RIGHT', params: { degrees: 25 } }, 
            { id: 'ft-32', 'type': 'MOVE', params: { steps: '-size * 0.7' } },
            { id: 'ft-33', 'type': 'TURN_RIGHT', params: { degrees: 25 } },
        ]
    },
    {
        name: 'Square',
        script: [
            { id: 'sq-1', type: 'CLEAR_ALL', params: {} }, { id: 'sq-2', type: 'PEN_DOWN', params: {} },
            { id: 'sq-3', type: 'REPEAT', params: { times: 4 }, children: [
                    { id: 'sq-3-1', type: 'MOVE', params: { steps: 100 } },
                    { id: 'sq-3-2', type: 'TURN_RIGHT', params: { degrees: 90 } },
                ],
            },
            { id: 'sq-4', type: 'PEN_UP', params: {} },
        ],
    },
    {
        name: 'Triangle',
        script: [
            { id: 'tri-1', type: 'CLEAR_ALL', params: {} }, { id: 'tri-2', type: 'PEN_DOWN', params: {} },
            { id: 'tri-3', type: 'REPEAT', params: { times: 3 }, children: [
                    { id: 'tri-3-1', type: 'MOVE', params: { steps: 100 } },
                    { id: 'tri-3-2', type: 'TURN_RIGHT', params: { degrees: 120 } },
                ],
            },
            { id: 'tri-4', type: 'PEN_UP', params: {} },
        ],
    },
    {
        name: 'Star',
        script: [
            { id: 'star-1', type: 'CLEAR_ALL', params: {} }, { id: 'star-2', type: 'PEN_DOWN', params: {} },
            { id: 'star-3', type: 'SET_PEN_COLOR', params: { color: '#FFD700' } },
            { id: 'star-4', type: 'REPEAT', params: { times: 5 }, children: [
                    { id: 'star-4-1', type: 'MOVE', params: { steps: 100 } },
                    { id: 'star-4-2', type: 'TURN_RIGHT', params: { degrees: 144 } },
                ],
            },
            { id: 'star-5', type: 'PEN_UP', params: {} },
        ],
    },
    {
        name: 'Circle',
        script: [
            { id: 'circ-1', type: 'CLEAR_ALL', params: {} }, { id: 'circ-2', type: 'PEN_DOWN', params: {} },
            { id: 'circ-3', type: 'REPEAT', params: { times: 360 }, children: [
                    { id: 'circ-3-1', type: 'MOVE', params: { steps: 2 } },
                    { id: 'circ-3-2', type: 'TURN_RIGHT', params: { degrees: 1 } },
                ],
            },
            { id: 'circ-4', type: 'PEN_UP', params: {} },
        ],
    },
    {
        name: 'Dashed Line',
        script: [
            { id: 'dash-1', type: 'CLEAR_ALL', params: {} },
            { id: 'dash-2', type: 'REPEAT', params: { times: 10 }, children: [
                    { id: 'dash-2-1', type: 'PEN_DOWN', params: {} },
                    { id: 'dash-2-2', type: 'MOVE', params: { steps: 10 } },
                    { id: 'dash-2-3', type: 'PEN_UP', params: {} },
                    { id: 'dash-2-4', type: 'MOVE', params: { steps: 10 } },
                ],
            },
        ],
    },
    {
        name: 'Square Spiral',
        script: [
            { id: 'ssp-1', type: 'CLEAR_ALL', params: {} }, { id: 'ssp-2', type: 'PEN_DOWN', params: {} },
            { id: 'ssp-3', type: 'SET_VARIABLE', params: { variable: 'len', value: 5 } },
            { id: 'ssp-4', type: 'REPEAT', params: { times: 40 }, children: [
                    { id: 'ssp-4-1', type: 'MOVE', params: { steps: 'len' } },
                    { id: 'ssp-4-2', type: 'TURN_RIGHT', params: { degrees: 90 } },
                    { id: 'ssp-4-3', type: 'CHANGE_VARIABLE', params: { variable: 'len', value: 5 } },
                ],
            },
        ],
    },
    {
        name: 'Countdown',
        script: [
            { id: 'cd-1', type: 'SET_VARIABLE', params: { variable: 'count', value: 5 } },
            { id: 'cd-2', type: 'REPEAT', params: { times: 5 }, children: [
                    { id: 'cd-2-1', type: 'SAY_FOR_SECONDS', params: { message: 'count', seconds: 1 } },
                    { id: 'cd-2-2', type: 'CHANGE_VARIABLE', params: { variable: 'count', value: -1 } },
                ],
            },
            { id: 'cd-3', type: 'SAY', params: { message: 'Blast off!' } },
        ],
    },
    {
        name: 'Nested Pattern',
        script: [
            { id: 'np-1', type: 'CLEAR_ALL', params: {} }, { id: 'np-2', type: 'PEN_DOWN', params: {} },
            { id: 'np-3', type: 'REPEAT', params: { times: 6 }, children: [
                    { id: 'np-3-1', type: 'TURN_RIGHT', params: { degrees: 60 } },
                    { id: 'np-3-2', type: 'REPEAT', params: { times: 4 }, children: [
                            { id: 'np-3-2-1', type: 'MOVE', params: { steps: 50 } },
                            { id: 'np-3-2-2', type: 'TURN_RIGHT', params: { degrees: 90 } },
                        ]
                    },
                ],
            },
        ],
    },
    {
        name: 'Flower',
        script: [
            { id: 'fl-1', type: 'CLEAR_ALL', params: {} }, { id: 'fl-2', type: 'PEN_DOWN', params: {} },
            { id: 'fl-3', type: 'SET_PEN_COLOR', params: { color: '#FF69B4' } },
            { id: 'fl-4', type: 'REPEAT', params: { times: 6 }, children: [
                    { id: 'fl-4-1', type: 'TURN_RIGHT', params: { degrees: 60 } },
                    { id: 'fl-4-2', type: 'REPEAT', params: { times: 90 }, children: [
                        { id: 'fl-4-2-1', type: 'MOVE', params: { steps: 2 } }, { id: 'fl-4-2-2', type: 'TURN_RIGHT', params: { degrees: 2 } },
                    ]},
                ],
            },
        ],
    },
    {
        name: 'Honeycomb',
        script: [
            { id: 'hc-1', type: 'CLEAR_ALL', params: {} }, { id: 'hc-2', type: 'PEN_DOWN', params: {} },
            { id: 'hc-3', type: 'REPEAT', params: { times: 6 }, children: [
                    { id: 'hc-3-1', type: 'REPEAT', params: { times: 6 }, children: [
                        { id: 'hc-3-1-1', type: 'MOVE', params: { steps: 30 } }, { id: 'hc-3-1-2', type: 'TURN_RIGHT', params: { degrees: 60 } },
                    ]},
                    { id: 'hc-3-2', type: 'MOVE', params: { steps: 30 } }, { id: 'hc-3-3', type: 'TURN_RIGHT', params: { degrees: 60 } },
                ],
            },
        ],
    },
    {
        name: 'Stairs',
        script: [
            { id: 'st-1', type: 'CLEAR_ALL', params: {} }, { id: 'st-2', type: 'PEN_DOWN', params: {} },
            { id: 'st-3', type: 'REPEAT', params: { times: 5 }, children: [
                { id: 'st-3-1', type: 'MOVE', params: { steps: 30 } }, { id: 'st-3-2', type: 'TURN_LEFT', params: { degrees: 90 } },
                { id: 'st-3-3', type: 'MOVE', params: { steps: 30 } }, { id: 'st-3-4', type: 'TURN_RIGHT', params: { degrees: 90 } },
            ]},
        ],
    },
    {
        name: 'Rectangle',
        script: [
            { id: 'rect-1', type: 'CLEAR_ALL', params: {} }, { id: 'rect-2', type: 'PEN_DOWN', params: {} },
            { id: 'rect-3', type: 'REPEAT', params: { times: 2 }, children: [
                { id: 'rect-3-1', type: 'MOVE', params: { steps: 100 } }, { id: 'rect-3-2', type: 'TURN_RIGHT', params: { degrees: 90 } },
                { id: 'rect-3-3', type: 'MOVE', params: { steps: 50 } }, { id: 'rect-3-4', type: 'TURN_RIGHT', params: { degrees: 90 } },
            ]},
        ],
    },
    {
        name: 'Shrinking Squares',
        script: [
            { id: 'ss-1', type: 'CLEAR_ALL', params: {} }, { id: 'ss-2', type: 'PEN_DOWN', params: {} },
            { id: 'ss-3', type: 'SET_VARIABLE', params: { variable: 'size', value: 150 } },
            { id: 'ss-4', type: 'REPEAT', params: { times: 10 }, children: [
                { id: 'ss-4-1', type: 'REPEAT', params: { times: 4 }, children: [
                    { id: 'ss-4-1-1', type: 'MOVE', params: { steps: 'size' } }, { id: 'ss-4-1-2', type: 'TURN_RIGHT', params: { degrees: 90 } },
                ]},
                { id: 'ss-4-2', type: 'CHANGE_VARIABLE', params: { variable: 'size', value: -15 } },
            ]},
        ],
    },
    {
        name: 'Web Pattern',
        script: [
            { id: 'web-1', type: 'CLEAR_ALL', params: {} }, { id: 'web-2', type: 'PEN_DOWN', params: {} },
            { id: 'web-3', type: 'REPEAT', params: { times: 12 }, children: [
                { id: 'web-3-1', type: 'MOVE', params: { steps: 100 } }, { id: 'web-3-2', type: 'MOVE', params: { steps: -100 } },
                { id: 'web-3-3', type: 'TURN_RIGHT', params: { degrees: 30 } },
            ]},
        ],
    },
    {
        name: 'Zigzag',
        script: [
            { id: 'zz-1', type: 'CLEAR_ALL', params: {} }, { id: 'zz-2', type: 'PEN_DOWN', params: {} },
            { id: 'zz-3', type: 'REPEAT', params: { times: 5 }, children: [
                { id: 'zz-3-1', type: 'TURN_RIGHT', params: { degrees: 45 } }, { id: 'zz-3-2', type: 'MOVE', params: { steps: 50 } },
                { id: 'zz-3-3', type: 'TURN_LEFT', params: { degrees: 90 } }, { id: 'zz-3-4', type: 'MOVE', params: { steps: 50 } },
                { id: 'zz-3-5', type: 'TURN_RIGHT', params: { degrees: 45 } },
            ]},
        ],
    },
    {
        name: 'Rainbow Lines',
        script: [
            { id: 'rl-1', type: 'CLEAR_ALL', params: {} },
            { id: 'rl-2', type: 'GOTO_XY', params: { x: -100, y: 100 } },
            { id: 'rl-3', type: 'SET_PEN_SIZE', params: { size: 5 } },
            { id: 'rl-4', type: 'SET_VARIABLE', params: { variable: 'y_pos', value: 100 } },
            { id: 'rl-5', type: 'REPEAT', params: { times: 7 }, children: [
                { id: 'rl-5-1', type: 'SET_PEN_COLOR', params: { color: '#FF0000' } }, { id: 'rl-5-2', type: 'PEN_DOWN', params: {} },
                { id: 'rl-5-3', type: 'MOVE', params: { steps: 200 } }, { id: 'rl-5-4', type: 'PEN_UP', params: {} },
                { id: 'rl-5-5', type: 'CHANGE_VARIABLE', params: { variable: 'y_pos', value: -20 } },
                { id: 'rl-5-6', type: 'GOTO_XY', params: { x: -100, y: 'y_pos' } },
            ]},
        ],
    },
    {
        name: 'Grid Drawer',
        script: [
            { id: 'grid-1', type: 'CLEAR_ALL', params: {} },
            { id: 'grid-2', type: 'SET_VARIABLE', params: { variable: 'pos', value: -100 } },
            { id: 'grid-3', type: 'REPEAT', params: { times: 5 }, children: [
                { id: 'grid-3-1', type: 'GOTO_XY', params: { x: 'pos', y: 100 } }, { id: 'grid-3-2', type: 'PEN_DOWN', params: {} },
                { id: 'grid-3-3', type: 'GOTO_XY', params: { x: 'pos', y: -100 } }, { id: 'grid-3-4', type: 'PEN_UP', params: {} },
                { id: 'grid-3-5', type: 'CHANGE_VARIABLE', params: { variable: 'pos', value: 50 } },
            ]},
            { id: 'grid-4', type: 'SET_VARIABLE', params: { variable: 'pos', value: -100 } },
            { id: 'grid-5', type: 'REPEAT', params: { times: 5 }, children: [
                { id: 'grid-5-1', type: 'GOTO_XY', params: { x: 100, y: 'pos' } }, { id: 'grid-5-2', type: 'PEN_DOWN', params: {} },
                { id: 'grid-5-3', type: 'GOTO_XY', params: { x: -100, y: 'pos' } }, { id: 'grid-5-4', type: 'PEN_UP', params: {} },
                { id: 'grid-5-5', type: 'CHANGE_VARIABLE', params: { variable: 'pos', value: 50 } },
            ]},
        ],
    },
    {
        name: 'Clock Face',
        script: [
            { id: 'cf-1', type: 'CLEAR_ALL', params: {} },
            { id: 'cf-2', type: 'REPEAT', params: { times: 12 }, children: [
                { id: 'cf-2-1', type: 'PEN_UP', params: {} }, { id: 'cf-2-2', type: 'GOTO_XY', params: { x: 0, y: 0 } },
                { id: 'cf-2-3', type: 'PEN_DOWN', params: {} }, { id: 'cf-2-4', type: 'MOVE', params: { steps: 100 } },
                { id: 'cf-2-5', type: 'PEN_UP', params: {} }, { id: 'cf-2-6', type: 'MOVE', params: { steps: 10 } },
                { id: 'cf-2-7', type: 'PEN_DOWN', params: {} }, { id: 'cf-2-8', type: 'MOVE', params: { steps: 5 } },
                { id: 'cf-2-9', type: 'TURN_RIGHT', params: { degrees: 30 } },
            ]},
        ],
    },
    {
        name: 'Simple House',
        script: [
            { id: 'sh-1', type: 'CLEAR_ALL', params: {} }, { id: 'sh-2', type: 'PEN_DOWN', params: {} },
            { id: 'sh-3', type: 'REPEAT', params: { times: 4 }, children: [ // Square base
                { id: 'sh-3-1', type: 'MOVE', params: { steps: 100 } }, { id: 'sh-3-2', type: 'TURN_RIGHT', params: { degrees: 90 } },
            ]},
            { id: 'sh-4', type: 'MOVE', params: { steps: 100 } }, { id: 'sh-5', type: 'TURN_RIGHT', params: { degrees: 30 } },
            { id: 'sh-6', type: 'MOVE', params: { steps: 100 } }, { id: 'sh-7', type: 'TURN_RIGHT', params: { degrees: 120 } },
            { id: 'sh-8', type: 'MOVE', params: { steps: 100 } },
        ],
    },
    {
        name: 'Triangle Spiral',
        script: [
            { id: 'tsp-1', type: 'CLEAR_ALL', params: {} }, { id: 'tsp-2', type: 'PEN_DOWN', params: {} },
            { id: 'tsp-3', type: 'SET_VARIABLE', params: { variable: 'len', value: 10 } },
            { id: 'tsp-4', type: 'REPEAT', params: { times: 20 }, children: [
                { id: 'tsp-4-1', type: 'MOVE', params: { steps: 'len' } },
                { id: 'tsp-4-2', type: 'TURN_RIGHT', params: { degrees: 120 } },
                { id: 'tsp-4-3', type: 'CHANGE_VARIABLE', params: { variable: 'len', value: 10 } },
            ]},
        ],
    },
    {
        name: 'Polygon Flower',
        script: [
            { id: 'pf-1', type: 'CLEAR_ALL', params: {} }, { id: 'pf-2', type: 'PEN_DOWN', params: {} },
            { id: 'pf-3', type: 'REPEAT', params: { times: 10 }, children: [
                { id: 'pf-3-1', type: 'TURN_RIGHT', params: { degrees: 36 } },
                { id: 'pf-3-2', type: 'REPEAT', params: { times: 5 }, children: [
                    { id: 'pf-3-2-1', type: 'MOVE', params: { steps: 50 } }, { id: 'pf-3-2-2', type: 'TURN_RIGHT', params: { degrees: 72 } },
                ]},
            ]},
        ],
    },
    {
        name: 'Message Sequence',
        script: [
            { id: 'ms-1', type: 'SAY_FOR_SECONDS', params: { message: 'Hello!', seconds: 2 } },
            { id: 'ms-2', type: 'SAY_FOR_SECONDS', params: { message: 'I can talk!', seconds: 2 } },
            { id: 'ms-3', type: 'SAY_FOR_SECONDS', params: { message: 'And draw amazing things!', seconds: 2 } },
            { id: 'ms-4', type: 'SAY', params: { message: 'Try the other demos!' } },
        ],
    },
    {
        name: 'Octagon',
        script: [
            { id: 'oct-1', type: 'CLEAR_ALL', params: {} }, { id: 'oct-2', type: 'PEN_DOWN', params: {} },
            { id: 'oct-3', type: 'REPEAT', params: { times: 8 }, children: [
                { id: 'oct-3-1', type: 'MOVE', params: { steps: 50 } },
                { id: 'oct-3-2', type: 'TURN_RIGHT', params: { degrees: 45 } },
            ]},
        ],
    },
    {
        name: 'Color Wheel',
        script: [
            { id: 'cw-1', type: 'CLEAR_ALL', params: {} },
            { id: 'cw-2', type: 'SET_PEN_SIZE', params: { size: 10 } },
            { id: 'cw-3', type: 'REPEAT', params: { times: 36 }, children: [
                { id: 'cw-3-1', type: 'SET_PEN_COLOR', params: { color: '#FF0000' } },
                { id: 'cw-3-2', type: 'PEN_DOWN', params: {} },
                { id: 'cw-3-3', type: 'MOVE', params: { steps: 100 } },
                { id: 'cw-3-4', type: 'PEN_UP', params: {} },
                { id: 'cw-3-5', type: 'MOVE', params: { steps: -100 } },
                { id: 'cw-3-6', type: 'TURN_RIGHT', params: { degrees: 10 } },
            ]},
        ],
    },
    {
        name: 'Random Walk',
        script: [
            { id: 'rw-1', type: 'CLEAR_ALL', params: {} }, { id: 'rw-2', type: 'PEN_DOWN', params: {} },
            { id: 'rw-3', type: 'REPEAT', params: { times: 100 }, children: [
                { id: 'rw-3-1', type: 'TURN_RIGHT', params: { degrees: 90 } }, // Simplified random with just turning right
                { id: 'rw-3-2', type: 'MOVE', params: { steps: 10 } },
            ]},
        ],
    },
    {
        name: 'Bouncing',
        script: [
            { id: 'bnc-1', type: 'CLEAR_ALL', params: {} }, { id: 'bnc-2', type: 'PEN_DOWN', params: {} },
            { id: 'bnc-3', type: 'POINT_IN_DIRECTION', params: { direction: 45 } },
            { id: 'bnc-4', type: 'REPEAT', params: { times: 200 }, children: [
                { id: 'bnc-4-1', type: 'MOVE', params: { steps: 20 } },
                // A real bounce needs edge detection, this is a simulation
                { id: 'bnc-4-2', type: 'TURN_LEFT', params: { degrees: 45 } },
            ]},
        ],
    },
    {
        name: 'Sunburst',
        script: [
            { id: 'sun-1', type: 'CLEAR_ALL', params: {} }, { id: 'sun-2', type: 'PEN_DOWN', params: {} },
            { id: 'sun-3', type: 'SET_PEN_COLOR', params: { color: '#FFC300' } },
            { id: 'sun-4', type: 'REPEAT', params: { times: 36 }, children: [
                { id: 'sun-4-1', type: 'MOVE', params: { steps: 150 } },
                { id: 'sun-4-2', type: 'MOVE', params: { steps: -150 } },
                { id: 'sun-4-3', type: 'TURN_RIGHT', params: { degrees: 10 } },
            ]},
        ],
    },
    {
        name: 'Windmill',
        script: [
            { id: 'wm-1', type: 'CLEAR_ALL', params: {} }, { id: 'wm-2', type: 'PEN_DOWN', params: {} },
            { id: 'wm-3', type: 'REPEAT', params: { times: 4 }, children: [
                { id: 'wm-3-1', type: 'MOVE', params: { steps: 80 } },
                { id: 'wm-3-2', type: 'TURN_RIGHT', params: { degrees: 90 } },
                { id: 'wm-3-3', type: 'MOVE', params: { steps: 20 } },
                { id: 'wm-3-4', type: 'MOVE', params: { steps: -20 } },
                { id: 'wm-3-5', type: 'MOVE', params: { steps: -80 } },
            ]},
        ],
    },
    {
        name: 'Creeper Face',
        script: [
            { id: 'cf-1', type: 'CLEAR_ALL', params: {} }, { id: 'cf-2', type: 'SET_PEN_COLOR', params: { color: '#000000' } },
            { id: 'cf-3', type: 'GOTO_XY', params: { x: -40, y: 40 } }, { id: 'cf-4', type: 'PEN_DOWN', params: {} },
            { id: 'cf-5', type: 'REPEAT', params: { times: 4 }, children: [{ id: 'cf-5-1', type: 'MOVE', params: { steps: 30 } }, { id: 'cf-5-2', type: 'TURN_RIGHT', params: { degrees: 90 } }] },
            { id: 'cf-6', type: 'PEN_UP', params: {} }, { id: 'cf-7', type: 'GOTO_XY', params: { x: 10, y: 40 } }, { id: 'cf-8', type: 'PEN_DOWN', params: {} },
            { id: 'cf-9', type: 'REPEAT', params: { times: 4 }, children: [{ id: 'cf-9-1', type: 'MOVE', params: { steps: 30 } }, { id: 'cf-9-2', type: 'TURN_RIGHT', params: { degrees: 90 } }] },
            { id: 'cf-10', type: 'PEN_UP', params: {} }, { id: 'cf-11', type: 'GOTO_XY', params: { x: -10, y: 0 } }, { id: 'cf-12', type: 'PEN_DOWN', params: {} },
            { id: 'cf-13', type: 'MOVE', params: { steps: -20 } }, { id: 'cf-14', type: 'TURN_RIGHT', params: { degrees: 90 } }, { id: 'cf-15', type: 'MOVE', params: { steps: 20 } },
            { id: 'cf-16', type: 'TURN_LEFT', params: { degrees: 90 } }, { id: 'cf-17', type: 'MOVE', params: { steps: 20 } },
        ],
    },
    {
        name: 'Wave',
        script: [
            { id: 'wv-1', type: 'CLEAR_ALL', params: {} }, { id: 'wv-2', type: 'PEN_DOWN', params: {} },
            { id: 'wv-3', type: 'REPEAT', params: { times: 5 }, children: [
                { id: 'wv-3-1', type: 'REPEAT', params: { times: 90 }, children: [{ id: 'wv-3-1-1', type: 'MOVE', params: { steps: 1 } }, { id: 'wv-3-1-2', type: 'TURN_RIGHT', params: { degrees: 1 } }] },
                { id: 'wv-3-2', type: 'REPEAT', params: { times: 90 }, children: [{ id: 'wv-3-2-1', type: 'MOVE', params: { steps: 1 } }, { id: 'wv-3-2-2', type: 'TURN_LEFT', params: { degrees: 1 } }] },
            ]},
        ],
    },
    {
        name: 'Letter A',
        script: [
            { id: 'la-1', type: 'CLEAR_ALL', params: {} }, { id: 'la-2', type: 'PEN_DOWN', params: {} },
            { id: 'la-3', type: 'TURN_LEFT', params: { degrees: 15 } }, { id: 'la-4', type: 'MOVE', params: { steps: 100 } },
            { id: 'la-5', type: 'TURN_RIGHT', params: { degrees: 150 } }, { id: 'la-6', type: 'MOVE', params: { steps: 100 } },
            { id: 'la-7', type: 'MOVE', params: { steps: -50 } }, { id: 'la-8', type: 'TURN_RIGHT', params: { degrees: 105 } },
            { id: 'la-9', type: 'MOVE', params: { steps: 26 } },
        ],
    }
];