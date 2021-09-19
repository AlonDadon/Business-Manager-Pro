import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

// const useOnScreen = (options: any) => {
//     const ref = useRef<HTMLDivElement>()
//     const [isDark, setIsDark] = useState(false)
//     useEffect(() => {
//         const observer = new IntersectionObserver(([entry]) => {
//             setIsDark(entry.isIntersecting)
//             console.log(isDark, 'observer');

//         }, options)
//         if (ref.current) {
//             observer.observe(ref.current)
//         }
//         return () => {
//             if (ref.current) {
//                 observer.unobserve(ref.current)
//             }
//         }
//     }, [ref, options])
//     return [ref, isDark]
// }


export const NavBar = () => {
    // const divRef = useRef<HTMLHeadingElement>(null)
    // const [isDark, setIsDark] = useState(false)
    return (
        <header className="main-header">
            <h1 className="logo">MB</h1>
            <nav>
                <ul className="nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/todo">Todo</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </nav>
            <NavLink to="/login" className="btn-login">Login</NavLink>
        </header>
    )
}

