import { useEffect } from "react";

export const useDebounce = (value: string, timeout: number, callback: Function, loading?: any) => {


    useEffect(() => {
        
        //call loading before timeout to prevent some bugs
        loading && loading()
        
        const timeOut = setTimeout(callback, timeout)

        return () => {
            clearTimeout(timeOut)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
}