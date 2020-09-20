import React, { useEffect, useState } from 'react'

function HookMouseLog() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse position logged')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(
        () => {
            console.log('use effect called')
            document.addEventListener('mousemove', logMousePosition)

            // return function will work as componentWillunMount function
            return () => {
                console.log('Component unmouting code');
                document.removeEventListener('mousemove', logMousePosition)
            }
        }, []
    )
    return (
        <div>
            Hooks X - {x}, Y - {y}
        </div>
    )
}

export default HookMouseLog