import React from 'react'

const Disclaimer = () => {
    const style = {
        // opacity: 0.9,
        fontSize: '14px',
        color: 'red',
        fontFamily: 'Open Sans'
    }

    return (
        <p style={ style}>This calculates the damage multiplier. This is not to be confused with DPS, which is affected by attack speed and cooldown reduction. For this, Trixion parses would be useful.</p>
    )
}

export default Disclaimer