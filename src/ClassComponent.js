import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ClassComponent = (props) => {
    const [state, setstate] = useState(10)
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={() => { setstate(state + 1) }}>Click</button>
            <p>props will be here</p>
            <p>{state}</p>
        </div >
    )
}

ClassComponent.propTypes = {
    title: PropTypes.string
}

export default ClassComponent


