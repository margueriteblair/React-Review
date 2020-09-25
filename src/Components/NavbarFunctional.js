import React, {useState, useEffect} from 'react'

export default function NavbarFunctional(props) {
    const [count, setCount] = useState(0)

    function incrementCount() {
        setCount((prevCount) => prevCount + 1)
    }
    function decrementCount() {
        setCount((prevCount) => prevCount - 1)
    }
    function resetCount() {
        setCount((prevCount) => prevCount = 0)
    }

    return (
        <div>
                <h1>The Current Functional Component Count is: {count}</h1>
                <button onClick={decrementCount}>-</button>
                <button onClick={incrementCount}>+</button>
                <button onClick={resetCount}>Reset</button>

        </div>
    )
}
