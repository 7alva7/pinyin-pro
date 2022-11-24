import { CompleteOptions } from './index';
import { SingleWordResult } from '../type';
export declare const validateType: (word: unknown) => boolean;
export declare const middleWareNonZh: (list: SingleWordResult[], options: CompleteOptions) => SingleWordResult[];
export declare const middlewareMultiple: (word: string, options: CompleteOptions) => SingleWordResult[] | false;
export declare const middlewarePattern: (list: SingleWordResult[], options: CompleteOptions) => void;
export declare const middlewareToneType: (list: SingleWordResult[], options: CompleteOptions) => void;
export declare const middlewareV: (list: SingleWordResult[], options: CompleteOptions) => void;
export declare const middlewareType: (list: SingleWordResult[], options: CompleteOptions) => string | string[] | {
    origin: string;
    pinyin: string;
    initial: string;
    final: string;
    first: string;
    finalHead: string;
    finalBody: string;
    finalTail: string;
    num: number;
    isZh: boolean;
}[];
