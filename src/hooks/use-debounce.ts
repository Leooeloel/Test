import { useEffect } from "react";

/**
 * click many times, trigger once
 * @example
 * ```typescript
 * const [value, setValue] = useState(0);
 * useDebounce(value, (v) => { console.log(v) }, 1000);
 * ```
 */
const useDebounce = (value: any, operation: Function, delay: number = 400, ...params: any) => {
    useEffect(() => {
        const handler = setTimeout(() => operation(value, ...params), delay);
        return () => clearTimeout(handler);
    }, [value]);
};

export default useDebounce;
