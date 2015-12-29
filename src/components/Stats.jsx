import React, { Component } from 'react'
import moment from 'moment'
import Ratings from './Ratings'
import Chart from './Chart'

class Stats extends Component {
  constructor(props) {
    super(props)
    this._ratings = this._ratings.bind(this)
    this._graph = this._graph.bind(this)
  }

  _ratings () {
    const ratings = {
      1: 'Very bad',
      2: 'Bad',
      3: 'Average',
      4: 'Good',
      5: 'Amazing!'
    }

    const totals = {}

    this.props.data.forEach(item => {
      if (totals[item.rating]) {
        totals[item.rating].total += 1
      } else {
        totals[item.rating] = {}
        totals[item.rating].title = ratings[item.rating]
        totals[item.rating].total = 1
      }
    })

    return totals
  }

  _graph () {
    const chartData = {
        labels: [],
        datasets: [{
          label: 'Avg Ratings over time',
          fillColor: 'rgba(0,0,0,0)',
          strokeColor: '#00A4C9',
          pointColor: '#00A4C9',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: '#00A4C9',
          data: []
        }]
    }

    const avgRatings = {}
    let date

    this.props.data.forEach(item => {
      date = moment(item.creation_date).format('DD MMM')
      if (avgRatings[date] && (avgRatings[date].total && avgRatings[date].count)){
        avgRatings[date].total += (item.rating ? item.rating : 0)
        avgRatings[date].count += 1
      } else {
        avgRatings[date] = {}
        avgRatings[date].total = (item.rating ? item.rating : 0)
        avgRatings[date].count = 1
      }
    })

    chartData.labels = Object.keys(avgRatings).sort()
    Object.keys(avgRatings).sort().forEach(item => chartData.datasets[0].data.push( Math.round((avgRatings[item].total / avgRatings[item].count) * 100) / 100 ))

    return chartData
  }

  render () {
    return (
      <div className='p2 Shadow BG-White Flex mb2'>
        <Ratings data={this._ratings()} />
        <Chart data={this._graph()} />
      </div>
    )
  }
}

Stats.displayName = 'Stats'

Stats.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default Stats
