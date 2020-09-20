import React, { useState } from 'react'

function HookCounterTwo() {
    const intialVal = 0
    const [count, setCount] = useState(intialVal)

    const incrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount(previouState => previouState + 1)
        }
    }

    return (
        <div>
            {count}
            <button onClick={() => setCount(intialVal)}>Reset</button>
            <button onClick={() => setCount(preSta => preSta + 1)}>Increment 1</button>
            <button onClick={() => setCount(preSta => preSta - 1)}>Decrement 1</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo