import React from 'react';
import PropTypes from 'prop-types';
import './Order.scss'
// import formatPrice from '../../../../constants/common';
Order.propTypes = {
    total: PropTypes.number,
};

function Order(props) {
    const {total} = props;
    return (
        <div className="order">
                <h5 className="title">THÔNG TIN ORDER</h5>
                <div className="sub-total">
                    <p>Thành tiền:</p>
                    <p id="total-cart">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}</p>
                </div>
                <p id="note">Ghi chú vào order của bạn</p>
                <label for="#des-note">Special instructions for seller :</label>
                <input type="text" id="des-note"/>
                <p id="note2">Phí vận chuyển,thuế, mã giảm giá sẽ được tính toán tại mục Thanh Toán</p>
                <a href="./payment.html"><button className="btn btn-dark btn-checkout">Xử lý đơn hàng</button></a>

                <div className="title cal-ship">THÔNG TIN SHIPPING</div>
                <label for="select-country">Địa Chỉ</label>
                <div className="select" id="select-country">
                    <select>
                        <option value="0">VietNam</option>
                        <option value="1">American</option>
                        <option value="2">Australia</option>
                        <option value="3">Korea</option>
                        <option value="4">Japan</option>
                        <option value="4">Germany</option>
                        <option value="4">England</option>
                        <option value="4">Portugal</option>

                    </select>
                </div>

                <label for="select-state">Công ty vận chuyển</label>
                <div className="select" id="select-state">
                    <select>
                        <option value="0">HaNoi</option>
                        <option value="1">HoChiMinh</option>
                        <option value="2">BacNinh</option>
                        <option value="3">HaiPhong</option>
                        <option value="4">NinhBinh</option>
                        <option value="4">Hue</option>
                        <option value="4">DaNang</option>
                        <option value="4">NhaTrang</option>
                        <option value="4">VungTau</option>

                    </select>
                </div>

                <label for="select-country">Postal / Zip code</label>
                <input type="text"/>

                <button className="btn btn-dark btn-calcul-shipping">Tính Toán Shipping</button>
        </div>
    );
}

export default Order;