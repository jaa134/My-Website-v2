const numberWithinRange = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

export default numberWithinRange;
