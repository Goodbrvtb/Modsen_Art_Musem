import { useEffect, useRef } from "react"

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: any[]) => void;


export function useDebounce(func: SomeFunction, delay: number) {
    const timeoutCurrent = useRef<Timer>()//хук для создания объкта timeoutCurrent
    useEffect(() => {                             //используется для очистки и установления нового тайм аута после ввода данных
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