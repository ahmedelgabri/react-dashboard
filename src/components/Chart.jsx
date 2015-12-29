import React, { Component } from 'react'
import { Line } from 'react-chartjs'
import chartjs from 'chart.js'

chartjs.defaults.global.responsive = true

class Chart extends Component {
  render () {
    const chartData = this.props.data
    const options = {
      bezierCurve: false,
      scaleShowVerticalLines: false
    }


    return (
      <div className='W-full--sm'>
        <Line data={chartData} options={options} width='1000' height='400' redraw/>
      </div>
    )
  }
}

Chart.displayName = 'Chart'

Chart.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default Chart
