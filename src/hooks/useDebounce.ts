import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const useDebounce = (value: string, timeout: number, callback: Function, loading?: any) => {


    useEffect(() => {
        
        //call loading before timeout to prevent some bugs
        loading && loading()
        
        const timeOut = setTimeout(callback, timeout)

        return () => {
            clearTimeout(timeOut)
        }
    }, [value])
}