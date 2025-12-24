'use client';
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({children}) {

    useEffect( () => {
        window.scrollTo(0,0);
        
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
        })
        
        let rafId;
        
        function raf(time) {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        
        rafId = requestAnimationFrame(raf)
        
        // Cleanup on unmount
        return () => {
            cancelAnimationFrame(rafId)
            lenis.destroy()
        }
    }, [])

    return children
}