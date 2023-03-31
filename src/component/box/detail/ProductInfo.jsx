import React from 'react';

import Tag from '../../tag';

import './box-detail.css';

const ProductInfo = () => {
  return (
    <div className="product-info">
      <div className="head">
        <div>
          <span style={{ color: '#8B8D97' }}>Create on: </span>
          <span className="date">12 Sept 2022</span>
        </div>
        <Tag name='Published' color="#519C66" />
      </div>
      <div className="bottom">
        <div className="group">
          <div className="field">Price</div>
          <div className="value">$25,000.00</div>
        </div>
        <div className="group">
          <div className="field">In-Stock</div>
          <div className="value">20</div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
