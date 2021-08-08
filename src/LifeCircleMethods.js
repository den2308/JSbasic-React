import React, { useEffect } from 'react'
import CustomeHook from './CustomeHook'

const Some = () => {

    //call custom hook
    const checkIfOnline = CustomeHook()
    console.log('checkIfOnline', checkIfOnline)

    const someFakeFunction = () => {
        console.log('some important info')
    }
    //componentDidMount
    useEffect(() => {
        someFakeFunction()
    })

    //componentDidUpdate
    useEffect(() => {
        someFakeFunction()
    }, [someFakeFunction])

    //componentDidUnMount
    useEffect(() => {
        return () => {
            someFakeFunction()
        }
    })

    return (
        <div>

        </div>
    )
}

export default Some
