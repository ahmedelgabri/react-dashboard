import React from 'react'

const Ratings = ({data}) => {
  const list = Object.keys(data).map(item => {
    return (
      <tr key={item}>
        <td><span className='White BG-DarkBlue Bubble mr1'>{item}</span>{data[item].title}</td>
        <td>{data[item].total}</td>
      </tr>
    )
  })

  return (
    <div className='W-half--lg W-full--sm mr1'>
      <table>
        <thead>
          <tr>
            <th>Rating</th>
            <th># Items</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  )
}

Ratings.displayName = 'Ratings'

Ratings.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default Ratings
