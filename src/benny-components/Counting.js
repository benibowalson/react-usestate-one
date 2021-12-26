import React from 'react'
import { useState } from 'react'

const initialState = {count: 0}

const Counting = () => {
    const [benny_things, setBennythings] = useState(initialState)
    return (
        <div>
            <h3>Count = {benny_things.count}</h3>
            <button onClick={() => setBennythings({...benny_things, count: benny_things.count + 1})}>Increment</button>
            <button onClick={() => setBennythings({...benny_things, count: benny_things.count - 1})}>Decrement</button>
            <button onClick={() => setBennythings(initialState)}>Reset</button>
        </div>
    )
}

export default Counting
