import React, { Component } from 'react'

export default class CardItem extends Component {
  render() {
    const { data ,handleXemChiTiet} = this.props
    return (
      <div>
         <div className="card">
                        <img src={data.image} alt="" />
                        <div className="card-body">
                            <p>{data.name}</p>
                            <p>${(data.price).toLocaleString()}</p>
                            <button className='btn btn-success' data-toggle="modal" data-target="#exampleModal" onClick={handleXemChiTiet}>Xem chi tiết</button>
                        </div>
                    </div>
      </div>
    )
  }
}
