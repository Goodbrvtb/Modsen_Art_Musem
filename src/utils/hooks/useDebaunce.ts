import { useEffect, useRef } from "react"

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: any[]) => void;


export function useDebaunce(func: SomeFunction, delay: number) {
    const timeoutCurent = useRef<Timer>()
    useEffect(() => {
        return () => {
            if (timeoutCurent.current) {
                clearTimeout(timeoutCurent.current)
            }
        }
    }, [])
    const debounceFunction = (...args: any[]) => {
        const timeoutNewId = setTimeout(() => { func(...args) }, delay)
        clearTimeout(timeoutCurent.current)
        timeoutCurent.current = timeoutNewId
    }

    return debounceFunction


}