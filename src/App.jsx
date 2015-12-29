import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import config from './config'
import api from './utils/api'
import Stats from './components/Stats'
import List from './components/List'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { items: [] }
  }

  componentDidMount () {
    api(this.props.url).then(data => this.setState({ items: data.items }))
  }

  render () {
    return (<div>
      <div className='inlineCenter BG-White Grey Shadow p1 mb1'>Dashboard</div>
      <Stats data={this.state.items} />
      <List data={this.state.items}/>
    </div>)
  }
}

App.displayName = 'App'

App.propTypes = {
  url: React.PropTypes.string.isRequired
}

ReactDOM.render(<App url={config.endpoint}/>, document.querySelector('#App'))
