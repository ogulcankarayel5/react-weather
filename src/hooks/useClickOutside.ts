import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const useClickOutside = () => {
    const searchRef = useRef<any>()
    const [isClickedOutside, setIsClickedOutside] = useState(false);

    const handleEvent = (event: any) => {
        if (searchRef && searchRef.current) {
            if (searchRef.current.contains(event.target)) {
                setIsClickedOutside(true)
            } else {
                setIsClickedOutside(false)
            }
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleEvent)
        document.addEventListener('touchstart', handleEvent)

        return () => {
            document.removeEventListener('mousedown', handleEvent)
            document.removeEventListener('touchstart', handleEvent)
        }
    }, [])

    return [searchRef, isClickedOutside]
}