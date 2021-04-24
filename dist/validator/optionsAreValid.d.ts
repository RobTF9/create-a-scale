declare function optionsAreValid(answers: {
    size?: number;
    scale?: number;
    out: string;
    breakpoints: number[] | boolean;
}): boolean;
export default optionsAreValid;
