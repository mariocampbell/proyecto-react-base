import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ButtonMain = (props) => {
    return (
        <Link
            to={ props.to }
            className='bg-blue-500 mr-3 shadow uppercase text-white py-2 px-4 text-sm hover:bg-blue-400'
            >{ props.text }</Link>
    )
}

ButtonMain.propType = {
    to: PropTypes.string,
    text: PropTypes.string
}

ButtonMain.defaultProps = {
    to: '/',
    text: 'Main'
}

export default ButtonMain