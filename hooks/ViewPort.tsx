import  { useEffect, useState } from 'react'

export const viewPort = () => {
    const [isMobile, setIsMobile] = useState<boolean>();

    useEffect(() => {
        // const origin = (typeof window !== 'undefined') ? window.location.origin : '';
        setIsMobile( (typeof window !== 'undefined') && window.innerWidth < 500 ? true : false)     
    }, [])

    return {
        isMobile
    }
}
