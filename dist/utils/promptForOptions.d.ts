declare function promptForOptions(options: {
    size?: number;
    scale?: number;
    out: string;
    breakpoints: number[] | boolean;
}): Promise<{
    size: number;
    scale: number;
    out: string;
    breakpoints: number[] | boolean;
}>;
export default promptForOptions;
