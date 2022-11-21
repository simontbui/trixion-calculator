import React from 'react'

const Disclaimer = () => {
    const style = {
        fontSize: '16px',
        color: 'rgb(50, 50, 80)',
        fontFamily: 'Open Sans',
        fontWeight: '750',
        color: "red"
    }

    return (
        <p className="disclaimer-text" style={ style }>The default values for crit rate, crit damage, other damage, and move speed are 0, 200, 0, and 0, respectively. For example if you leave crit damage blank, the calculator will assume 200% crit damage.</p>
    )
}

export default Disclaimer