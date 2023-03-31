import React, { useCallback } from 'react';
import { Input } from '@arco-design/web-react';

import { DEFINITION, dispatch } from '../../../event';
import boxImg from 'Image/box.png';

import './box-detail.css';

const TextArea = Input.TextArea;

const BoxInfo = (props) => {
  const { data } = props;

  const handleBoxNameUpdate = useCallback((value) => {
    dispatch(DEFINITION.BOX_UPDATE, { name: value });
  }, []);

  const handleBoxDescriptionUpdate = useCallback((value) => {
    dispatch(DEFINITION.BOX_UPDATE, { description: value });
  }, []);

  return (
    <div className="box-info">
      <div className="image">
        <img src={boxImg} />
      </div>
      <div>
        <div className="title">
          <Input
            placeholder='input box name here'
            value={data.name}
            onChange={handleBoxNameUpdate}
          />
        </div>
        <div className="description">
          <TextArea
            placeholder='input box description here'
            value={data.description}
            maxLength={100}
            onChange={handleBoxDescriptionUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default BoxInfo;
