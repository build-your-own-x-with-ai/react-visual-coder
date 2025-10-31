import type { Dispatch, SetStateAction } from 'react';
import { ScriptBlock, SpriteState, Variables } from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const evaluate = (expression: string, variables: Variables): number => {
    // In a real scenario, use a proper expression parser.
    // For this demo, we'll handle simple cases like 'size * 0.8' or '360 / sides'.
    // This is NOT safe for production use with arbitrary user input.
    try {
        const variableNames = Object.keys(variables);
        const variableValues = Object.values(variables);
        // eslint-disable-next-line no-new-func
        const func = new Function(...variableNames, `return ${expression}`);
        const result = func(...variableValues);
        return typeof result === 'number' && isFinite(result) ? result : 0;
    } catch (e) {
        console.error(`Error evaluating expression "${expression}":`, e);
        return 0;
    }
};


const getParamValue = (param: string | number, variables: Variables): string | number => {
    if (typeof param === 'string' && variables[param] !== undefined) {
        return variables[param];
    }
    if (typeof param === 'string') {
        // Attempt to evaluate if it's an expression
        if (/[*/+-]/.test(param) && Object.keys(variables).some(v => param.includes(v))) {
             return evaluate(param, variables);
        }
    }
    return param;
};

async function execute(
    script: ScriptBlock[],
    setSpriteState: Dispatch<SetStateAction<SpriteState>>,
    variables: Variables,
    setVariables: Dispatch<SetStateAction<Variables>>,
    getCanvasContext: () => CanvasRenderingContext2D | null,
    stopSignal: { current: boolean }
) {
     for (const block of script) {
        if (stopSignal.current) return;
        const resolvedParams = Object.fromEntries(
            Object.entries(block.params).map(([key, value]) => [key, getParamValue(value, variables)])
        );

        switch (block.type) {
            case 'MOVE': {
                const steps = Number(resolvedParams.steps);
                setSpriteState(prevState => {
                    const ctx = getCanvasContext();
                    const { x: prevX, y: prevY, rotation, pen } = prevState;
                    const angleRad = rotation * (Math.PI / 180); // 0 degrees is up
                    const newX = prevX + steps * Math.sin(angleRad);
                    const newY = prevY + steps * Math.cos(angleRad);

                    if (pen.isDown && ctx) {
                        const { width, height } = ctx.canvas;
                        ctx.beginPath();
                        ctx.moveTo(width / 2 + prevX, height / 2 - prevY);
                        ctx.lineTo(width / 2 + newX, height / 2 - newY);
                        ctx.strokeStyle = pen.color;
                        ctx.lineWidth = pen.size;
                        ctx.lineCap = 'round';
                        ctx.stroke();
                    }
                    return { ...prevState, x: newX, y: newY };
                });
                await delay(20);
                break;
            }
            case 'TURN_RIGHT': {
                const degrees = Number(resolvedParams.degrees);
                setSpriteState(prevState => ({ ...prevState, rotation: prevState.rotation + degrees }));
                await delay(20);
                break;
            }
            case 'TURN_LEFT': {
                const degrees = Number(resolvedParams.degrees);
                setSpriteState(prevState => ({ ...prevState, rotation: prevState.rotation - degrees }));
                await delay(20);
                break;
            }
            case 'GOTO_XY': {
                const x = Number(resolvedParams.x);
                const y = Number(resolvedParams.y);
                setSpriteState(prevState => ({...prevState, x, y}));
                break;
            }
            case 'POINT_IN_DIRECTION': {
                const direction = Number(resolvedParams.direction);
                setSpriteState(prevState => ({...prevState, rotation: direction}));
                break;
            }
            case 'SAY': {
                const message = String(resolvedParams.message);
                setSpriteState(prevState => ({ ...prevState, message }));
                break;
            }
            case 'SAY_FOR_SECONDS': {
                const message = String(resolvedParams.message);
                const seconds = Number(resolvedParams.seconds);
                setSpriteState(prevState => ({ ...prevState, message }));
                await delay(seconds * 1000);
                if (!stopSignal.current) {
                    setSpriteState(prevState => ({ ...prevState, message: '' }));
                }
                break;
            }
            case 'REPEAT': {
                const times = Math.floor(Number(resolvedParams.times));
                if (block.children) {
                    for (let i = 0; i < times; i++) {
                        if (stopSignal.current) break;
                        await execute(block.children, setSpriteState, variables, setVariables, getCanvasContext, stopSignal);
                    }
                }
                break;
            }
            case 'CLEAR_ALL': {
                const ctx = getCanvasContext();
                if (ctx) {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                }
                break;
            }
            case 'PEN_DOWN': {
                setSpriteState(prevState => ({ ...prevState, pen: { ...prevState.pen, isDown: true } }));
                break;
            }
            case 'PEN_UP': {
                setSpriteState(prevState => ({ ...prevState, pen: { ...prevState.pen, isDown: false } }));
                break;
            }
            case 'SET_PEN_COLOR': {
                const color = String(resolvedParams.color);
                setSpriteState(prevState => ({ ...prevState, pen: { ...prevState.pen, color } }));
                break;
            }
            case 'SET_PEN_SIZE': {
                const size = Number(resolvedParams.size);
                setSpriteState(prevState => ({ ...prevState, pen: { ...prevState.pen, size } }));
                break;
            }
            case 'SET_VARIABLE': {
                const varName = String(block.params.variable); // Use original param before resolving
                const value = resolvedParams.value;
                setVariables(prev => ({...prev, [varName]: value}));
                break;
            }
            case 'CHANGE_VARIABLE': {
                 const varName = String(block.params.variable);
                 const value = Number(resolvedParams.value);
                 setVariables(prev => {
                    const currentVal = Number(prev[varName] || 0);
                    return {...prev, [varName]: currentVal + value};
                 });
                break;
            }
            default:
                break;
        }
    }
}


export const executeScript = async (
    script: ScriptBlock[],
    setSpriteState: Dispatch<SetStateAction<SpriteState>>,
    variables: Variables,
    setVariables: Dispatch<SetStateAction<Variables>>,
    getCanvasContext: () => CanvasRenderingContext2D | null,
    stopSignal: { current: boolean }
) => {
    await execute(script, setSpriteState, variables, setVariables, getCanvasContext, stopSignal);
};