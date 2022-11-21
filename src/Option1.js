import React, { Component } from 'react'
import { engravArr } from './calculations/engravings'

class Option1 extends Component {
    render () {
        const { option1, handleLeftEngChange, handleLeftLvlChange, handleLeftInputChange } 
            = this.props

        let dropdowns = []
        for (let i=0; i<6; i++) {
            dropdowns.push(
                <li key={i}>
                        {/* Left Eng Select */}
                        <select 
                            defaultValue="Select Engraving"
                            className="engraving-select"
                            id={i}
                            onChange={(e) => handleLeftEngChange(e)}                       
                        >
                            <option value="Select Engraving" disabled>Select Engraving</option>
                            {engravArr.map(engraving => (
                                <option key={engraving} value={engraving}>{engraving}</option>
                            ))}
                        </select>

                        {/* Left Lvl Select */}
                        <select 
                            defaultValue="lvl" 
                            className="engraving-lvl" 
                            style={{'width': '7%'}}
                            id={i}
                            onChange={(e) => handleLeftLvlChange(e)}
                        >
                            <option value="lvl" disabled>lvl</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                </li>
            )             
        }

        return (
            <>
                <div className='engraving-div'>
                    <div className='option-header'>Option #1</div>
                    <ul>{dropdowns}</ul>
                </div>
                <div className='input-div'>
                    <ul>
                        <li>
                            <input 
                                type='number' placeholder='Crit Rate'
                                id='crit'
                                onChange={(e) => handleLeftInputChange(e)}
                            />
                            <input 
                                type='number' placeholder='Crit Damage'
                                id='critDmg'
                                onChange={(e) => handleLeftInputChange(e)}
                            />
                            <input 
                                type='number' placeholder='Other Damage'
                                id='dmg'
                                onChange={(e) => handleLeftInputChange(e)}
                            />
                            <input 
                                type='number' placeholder='Move Speed'
                                id='moveSpeed'
                                onChange={(e) => handleLeftInputChange(e)}
                            />
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Option1