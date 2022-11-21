import React, { Component } from 'react'
import Option1 from './Option1.js'
import Option2 from './Option2.js'
import Output from './Output.js'
import Disclaimer from './Disclaimer.js'

class App extends Component {
    // option1 = [{id: 0, engraving: null, lvl: null},...,{id:5, engraving:null, lvl:null},
    //            {id: 6, crit:0} , {id: 7, critdmg:0}, {id: 8, dmg:0}]
    state = {
        option1: new Array(10).fill().map(function(_, i)  {
            if (i === 6) {
                return {id: 'crit', crit: 0}
            }
            else if (i === 7) {
                return {id: 'critDmg', critDmg: 200}
            }
            else if (i === 8) {
                return {id: 'dmg', dmg: 0}
            }
            else if (i === 9) {
                return {id: "moveSpeed", moveSpeed: 0}
            }
            // else if (i === 9) {
            //     return {multiplier: 3.5.toFixed(2)}
            // }
            return {id: i, engraving: null, lvl: null}
        }),
        option2: new Array(10).fill().map(function(_, i)  {
            if (i === 6) {
                return {id: 'crit', crit: 0}
            }
            else if (i === 7) {
                return {id: 'critDmg', critDmg: 200}
            }
            else if (i === 8) {
                return {id: 'dmg', dmg: 0}
            }
            else if (i === 9) {
                return {id: "moveSpeed", moveSpeed: 0}
            }
            // else if (i === 9) {
            //     return {multiplier: 6.5.toFixed(2)}
            // }
            return {id: i, engraving: null, lvl: null}
        })  
    }

    handleLeftEngChange = (e) => {
        let id = e.target.id
        let eng = e.target.value
        this.setState((prevState) => ({
            option1: prevState.option1.map(obj => {
                if (obj.id == id) {
                    return {...obj, engraving: eng}
                }
                return obj
            })
        }))
    }

    handleLeftLvlChange = (e) => {
        let id = e.target.id
        let lvl = e.target.value
        this.setState((prevState) => ({
            option1: prevState.option1.map(obj => {
                if (obj.id == id) {
                    return {...obj, lvl: lvl}
                }
                return obj
            })
        }))
    }

    handleLeftInputChange = (e) => {
        let ID = e.target.id
        let value = e.target.value
        this.setState((prevState) => ({
            option1: prevState.option1.map(obj => {
                if (obj.id === ID) {
                    return {...obj, [ID]: value}
                }
                return obj
            })
        }))
    }

    handleRightEngChange = (e) => {
        let id = e.target.id
        let eng = e.target.value
        this.setState((prevState) => ({
            option2: prevState.option2.map(obj => {
                if (obj.id == id) {
                    return {...obj, engraving: eng}
                }
                return obj
            })
        }))
    }

    handleRightLvlChange = (e) => {
        let id = e.target.id
        let lvl = e.target.value
        this.setState((prevState) => ({
            option2: prevState.option2.map(obj => {
                if (obj.id == id) {
                    return {...obj, lvl: lvl}
                }
                return obj
            })
        }))
    }

    handleRightInputChange = (e) => {
        let ID = e.target.id
        let value = e.target.value
        this.setState((prevState) => ({
            option2: prevState.option2.map(obj => {
                if (obj.id === ID) {
                    return {...obj, [ID]: value}
                }
                return obj
            })
        }))
    }

    render() {
        return (
            <>
                <div className="master-div">
                    <div className='top-container'></div>
                    <div className='options-container'>
                        <div className='option-1'>
                            <Option1
                                option1={this.state.option1}
                                handleLeftEngChange={this.handleLeftEngChange}
                                handleLeftLvlChange={this.handleLeftLvlChange}
                                handleLeftInputChange={this.handleLeftInputChange}
                            />
                        </div>
                        <div className='option-2'>
                            <Option2 
                                option2={this.state.option2}
                                handleRightEngChange={this.handleRightEngChange}
                                handleRightLvlChange={this.handleRightLvlChange}
                                handleRightInputChange={this.handleRightInputChange}
                            />
                        </div>
                    </div>

                    <div className='output-disclaimer-container'>
                        <Output 
                            option1Data={this.state.option1} option2Data={this.state.option2}
                        /> 
                        <Disclaimer />
                    </div>

                </div>
            </>
        )
    }
}

export default App
