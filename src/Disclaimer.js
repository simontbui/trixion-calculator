import React from 'react'

const Disclaimer = () => {
    const style = {
        fontSize: '16px',
        color: 'rgb(50, 50, 80)',
        fontFamily: 'Open Sans',
        fontWeight: '750'
    }

    return (
        <p style={ style}>This calculates the damage multiplier. This is not to be confused with DPS, which is affected by attack speed and cooldown reduction. For this, Trixion parses would be useful.</p>
    )
}

export default Disclaimer