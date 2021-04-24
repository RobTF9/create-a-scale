declare function parseArguments(raw: string[]): {
    size?: number;
    scale?: number;
    out: string;
    breakpoints: number[] | boolean;
};
export default parseArguments;
