import { useState, useEffect } from 'react'

const subscribeToServerStream = (status, changeStatus) => {
    changeStatus(status)
}

const unsubscribeFromServerStream = (status, changeStatus) => {
    changeStatus(status)
}

const CustomHook = () => {
    const [onlineStatus, setOnlineStatus] = useState(false)

    const handleChangeStatus = (status) => {
        setOnlineStatus(status)
    }
    useEffect(() => {
        subscribeToServerStream(true, handleChangeStatus)
        return () => {
            unsubscribeFromServerStream(false, handleChangeStatus)
        }
    })
    return onlineStatus
}

export default CustomHook