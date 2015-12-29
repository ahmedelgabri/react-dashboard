import React, { Component } from 'react'
import Paginator from 'react-pagify'
import Row from './Row'
import Search from './Search'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      pagination: {
        page: 0,
        perPage: 20
      }
    }
    this._filter = this._filter.bind(this)
    this._onSelect = this._onSelect.bind(this)
  }

  _filter (e) {
    const term = e.target.value.trim().toLowerCase()
    const filtered = this.props.data.filter(item => {
      // Simple comments filtering
      return (item.comment.toLowerCase().indexOf(term) > -1)
    })
    this.setState({ data: filtered })
  }

  _onSelect(page) {
    let pagination = this.state.pagination || {};

    pagination.page = page;

    this.setState({
      pagination: pagination
    });
  }

  render () {
    const data = this.state.data.length ? this.state.data : this.props.data
    const pagination = this.state.pagination || {};
    const paginated = Paginator.paginate(data, pagination);
    const rows = paginated.data.map(item => <Row key={item.id} item={item} />)

    return (
      <div className='mb2'>
        <div className="Flex">
          <Search onChange={this._filter} />
          <Paginator
            className='ResetList inlineCenter Pagination mb1'
            inactiveClassName='inactive'
            page={paginated.page}
            pages={paginated.amount}
            beginPages={5}
            endPages={5}
            showPrevNext={false}
            alwaysShowPrevNext={false}
            onSelect={this._onSelect}/>
        </div>
        <table className='BG-White Shadow Table'>
            <colgroup>
              <col/>
              <col className="Table__comment"/>
              <col/>
              <col/>
              <col/>
            </colgroup>
            <thead className='BG-Grey White'>
              <tr>
                <th>Rating</th>
                <th>Comment</th>
                <th>Browser</th>
                <th>Device</th>
                <th>Platform</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
        </table>
      </div>
    )
  }
}

List.displayName = 'List'

List.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default List
