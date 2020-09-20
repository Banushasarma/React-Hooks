import React, { useState } from 'react'
import HookMouseLog from './HookMouseLog'

function MouseContainer() {
    const [display, setdisplay] = useState(true)
    return (
        <div>
            <button onClick={() => { setdisplay(!display) }}>Toggle Display</button>
            {
                display && <HookMouseLog></HookMouseLog>
            }
        </div>
    )
}

export default MouseContainer
