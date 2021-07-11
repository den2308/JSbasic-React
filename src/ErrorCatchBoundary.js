import React, { Component } from 'react'

class ErrorCatchBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    static getDerivedStateFromError(error) {
        return { error: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log('error', error)
        console.log('errorInfo', errorInfo)
    }
    render() {
        if (this.state.error) {
            return <p>Oops something went wrong</p>
        }
        return this.props.children

    }
}

export default ErrorCatchBoundary
