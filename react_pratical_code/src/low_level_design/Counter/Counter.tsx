import React, { useCallback, useState } from 'react'
import Button from './Button'

const Counter = () => {
    const [count, setCount] = useState(0)

    const [step, setStep] = useState(5)

    const handleIncrement = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [count])

    const handleDecrement = useCallback(() => {
        if (count > 0) {
            setCount((prev) => prev - 1)
        } else {
            alert('Count cannot be negative')
        }
    }, [count])

    const handleReset = useCallback(() => {
        setCount((prev) => 0)
    }, [])

    const handleStepIncrement = useCallback(() => {
        setCount((prev) => prev + step)
    }, [count, step])

    const handleStepDecrement = useCallback(() => {
        if (count >= step) {
            setCount((prev) => prev - step)
        } else {
            alert('Step cannot be negative')
        }
    }, [count, step])



    return (
        <>
            <h1 className='text-2xl font-bold'>{count}</h1>
            <div className='flex flex-col items-center justify-center'>

                <Button onClick={handleIncrement}>Increment</Button>
                <Button onClick={handleDecrement}>Decrement</Button>
                <Button onClick={handleReset}>Reset</Button>

                <input
                    type="number"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                    className="border p-2"
                />
                <Button onClick={handleStepIncrement}>Step Increment</Button>
                <Button onClick={handleStepDecrement}>Step Decrement</Button>
            </div></>
    )
}



export default Counter