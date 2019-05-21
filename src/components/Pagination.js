import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    return (
      <div className="pagination-layout2 margin-b-30 d-flex justify-content-center">
        <ul>
          <li><a href="#">01</a></li>
          <li><a href="#" className="active">02</a></li>
          <li><a href="#">03</a></li>
          <li><a href="#">04</a></li>
        </ul>
      </div>
    )
  }
}
