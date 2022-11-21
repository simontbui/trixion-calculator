import React from 'react'
import getMultiplier from './calculations/Multiplier.js'
import compare from './calculations/CompareMultiplier.js'

function Output (props) {
    const style = {
        color: 'red',
        fontFamily: 'Open Sans',
        fontSize: '20px',
        fontWeight: 'bolder',
        textAlign: "center"
    }

    const multiplierStyle = {
        fontFamily: 'Open Sans',
        color: 'rgb(50, 50, 80)',
        fontWeight: '900',
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
    }
    
    const multi1 = getMultiplier(props.option1Data)
    const multi2 = getMultiplier(props.option2Data)
    let relativeOutput
    if (multi1 > multi2) {
        relativeOutput = <p style={style}>Option #1 is {compare(multi1, multi2)}x stronger than Option #2</p>
    } else if (multi1 < multi2) {
        relativeOutput = <p style={style}>Option #2 is {compare(multi2, multi1)}x stronger than Option #1</p>
    } else if (multi1 === multi2) {
        relativeOutput = <p style={style}>Option #1 and Option #2 are equivalent</p>
    }

    return (
        <>
            <div className="option-multipliers">
                <p>Option #1: {multi1.toFixed(2)}</p>
                <p>Option #2: {multi2.toFixed(2)}</p>
            </div>
            {relativeOutput}
        </>
    )
}

export default Output