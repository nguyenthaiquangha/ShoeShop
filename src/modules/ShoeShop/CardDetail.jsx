import React, { Component } from 'react'

export default class CardDetail extends Component {
  render() {
    const {spChiTiet} = this.props;
    const {name,
        alias,
        price,
        description,
        shortDescription,
        quantity,
        image} = spChiTiet
    return (
      <div>
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="card" style={{width: '100'}}>
                                    <img src={image} alt="" className="card-img-top" />
                                        <div className="card-body" >
                                            <p>Tên: {name}</p>
                                            <p>Alias: {alias}</p>
                                            <p>Giá: {price}</p>
                                            <p>Mô tả: {description}</p>
                                            <button className='btn btn-success mr-2'>+</button>
                                            {quantity}
                                            <button className='btn btn-success ml-2'>-</button>
                                        </div>
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    )
  }
}
