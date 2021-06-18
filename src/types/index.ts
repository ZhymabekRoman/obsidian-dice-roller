export interface ILexeme {
    original: string;
    type: string;
    data: string;
    conditionals: IConditional[];
}

export interface IConditional {
    operator: string;
    comparer: number;
}

export type ResultMapInterface<T> = Map<number, ResultInterface<T>>;
export type ResultInterface<T> = {
    usable: boolean;
    value: T;
    modifiers?: Set<string>;
};

export declare class Roller<T> {
    display: string;
    result: T;
    resultArray: T[];
    rolls: number;
    toString: () => string;
    roll: () => T[];
}