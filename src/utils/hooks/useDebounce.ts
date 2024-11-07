import { useEffect, useRef } from "react"

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: any[]) => void;


export function useDebounce(func: SomeFunction, delay: number) {
    const timeoutCurrent = useRef<Timer>()
    useEffect(() => {
        return () => {
            if (timeoutCurrent.current) {
                clearTimeout(timeoutCurrent.current)
            }
        }
    }, [])
    const debounceFunction = (...args: any[]) => {
        const timeoutNewId = setTimeout(() => { func(...args) }, delay)
        clearTimeout(timeoutCurrent.current)
        timeoutCurrent.current = timeoutNewId
    }

    return debounceFunction


}