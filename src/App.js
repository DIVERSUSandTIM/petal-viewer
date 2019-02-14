import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

// import Flower from './components/Flower'
import ForceFlower from './components/ForceFlower'
import TreeFlower from './components/TreeFlower'
import Flower from './components/Flower'
import Settings from './components/Settings'

import { METHODS } from './actions/settings'

class App extends Component {
  constructor(props) {
    super(props)
    this.resize = this.resize.bind(this)
    this.state = {
      width: 0,
      height: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
    this.resize()
  }

  resize() {
    const width = window.innerWidth
    const height = window.innerHeight

    this.setState({
      width, height
    })
  }

  render() {
    const { data, settings, dispatch } = this.props
    const { width, height } = this.state
    return (
      <div className="App">
        {settings.selected === METHODS[0] &&
          <Flower
            size={(width < height) ? width : height}
            data={data}
          />
        }
        {(settings.selected === METHODS[1] ||  settings.selected === METHODS[2]) &&
          <ForceFlower
            size={(width < height) ? width : height}
            data={data}
            fixed={settings.selected === METHODS[2]}
          />
        }
        {settings.selected === METHODS[3] &&
          <TreeFlower
            size={(width < height) ? width : height}
            data={data}
          />
        }

        <Settings
          selected={settings.selected}
          dispatch={dispatch}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { data, settings, dispatch } = state
  return { data, settings, dispatch }
}

export default connect(mapStateToProps)(App);
