import React from 'react'
import PropTypes from 'prop-types'
import { changeMethod, METHODS } from '../actions/settings'

const style = {
    display: 'block',
    margin: '5px'
}

class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.onRadioChanged = this.onRadioChanged.bind(this)
    }

    onRadioChanged(e) {
        const { dispatch } = this.props
        dispatch(changeMethod(e.currentTarget.value))
    }
    
    render() {
        const { selected } = this.props
        return(
            <div
                style={{position: 'fixed', left: '30px', top: '30px', textAlign: 'left'}}
            >
                  <fieldset style={{border: 'none', display: 'block'}}>
                    <div style={style}>
                        <input
                            type="radio"
                            id="first"
                            value={METHODS[0]}
                            checked={selected === METHODS[0]}
                            onChange={this.onRadioChanged}
                        />
                        <label htmlFor="first"> Calculated</label>
                    </div>
                    <div style={style}>
                        <input
                            type="radio"
                            id="second"
                            value={METHODS[1]}
                            checked={selected === METHODS[1]}
                            onChange={this.onRadioChanged}
                        />
                        <label htmlFor="second"> Naive Physics</label>
                    </div>
                    <div style={style}>
                        <input
                            type="radio"
                            id="third"
                            value={METHODS[2]}
                            checked={selected === METHODS[2]}
                            onChange={this.onRadioChanged}
                        />
                        <label htmlFor="third"> Fixed first Petals</label>
                    </div>
                    <div style={style}>
                        <input
                            type="radio"
                            id="third"
                            value={METHODS[3]}
                            checked={selected === METHODS[3]}
                            onChange={this.onRadioChanged}
                        />
                        <label htmlFor="third"> Tree Petals</label>
                    </div>
                    <div style={style}>
                        <input
                            type="radio"
                            id="third"
                            value={METHODS[4]}
                            checked={selected === METHODS[4]}
                            onChange={this.onRadioChanged}
                        />
                        <label htmlFor="third"> Tree Petals Complex</label>
                    </div>
                </fieldset>
            </div>
        )
    }
}

Settings.propTypes = {
    selected: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
}

export default Settings