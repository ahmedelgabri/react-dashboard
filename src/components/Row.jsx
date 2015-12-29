import React, { Component } from 'react'

const Row = ({ item }) => {
  const device = /mac|win/i.test(item.computed_browser.Platform) ? 'Desktop' : 'Mobile'
  return (<tr>
    <td>
      <span className='White BG-DarkBlue Bubble'>{item.rating}</span>
    </td>
    <td>
      {item.comment}
    </td>
    <td>
      {item.computed_browser.Browser}{' '}{item.computed_browser.Version}
    </td>
    <td>
      {device}
    </td>
    <td>
      {item.computed_browser.Platform}
    </td>
  </tr>)
}


Row.displayName = 'Row'

Row.propTypes = {
  item: React.PropTypes.object.isRequired
}

export default Row;
