import React, { useState, useCallback } from 'react';
import { Spin, Modal } from '@arco-design/web-react';
import { IconClose } from '@arco-design/web-react/icon';

import Tag from '../../tag';
import boxImg from 'Image/box.png';

import { waitToCall } from '../../../../test/util';

import './box-grid.css';

const BoxItem = (props) => {
  const { data, onShowDetail, onRemove } = props;

  const [submitting, setSubmitting] = useState(false);
  const handleRemove = useCallback(() => {
    setSubmitting(true);
    waitToCall(() => {
      try {
        onRemove(data.id);
      } catch (err) {
        Modal.error({
          title: 'Error Notification',
          okText: 'Ok',
          content:
            <div style={{ textAlign: 'center' }}>
              Failed to remove box: <span style={{ color: 'red' }}>{data.name}</span>. 
              Please try again later.
            </div>,
        });
      } finally{
        setSubmitting(false);
      }
    }, 1000);
  }, [data]);

  return (
    <Spin loading={submitting}>
      <div className="box-item">
        <div className="remove" onClick={handleRemove}><IconClose /></div>
        <div className="tags">
          {
            data.tags?.map(tag => (
              <Tag name={tag} key={tag} />
            ))
          }
        </div>
        <div className="banner">
          <div className="title">{data.name}</div>
          <div className="price">{data.price || ''}</div>
        </div>
        <div className="description">
          {data.description}
        </div>
        <div className="image">
          <img src={boxImg} />
        </div>
        <div className="button">
          <button type="button" onClick={onShowDetail}>Details</button>
        </div>
      </div>
    </Spin>
  );
}

export default BoxItem;
