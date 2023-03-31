import React, { useState, useCallback } from 'react';

import BoxItem from './BoxItem';
import BoxCreateModal from '../create/BoxCreateModal';
import BoxDetailDrawer from '../detail/BoxDetailDrawer';
import boxImg from 'Image/box.png';

import { mayFailCall } from '../../../../test/util';
import { testBoxData } from '../../../../test/data';

import './box-grid.css';

const BoxGrid = () => {
  const [boxData, setBoxData] = useState(testBoxData);

  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [detailDrawerVisible, setDetailDrawerVisible] = useState(false);
  const [curBoxIndex, setCurBoxIndex] = useState(-1);

  const handleShowDetailBox = useCallback((index) => {
    setCurBoxIndex(index);
    setDetailDrawerVisible(true);
  }, []);

  const handleCreateBox = useCallback((params) => {
    setBoxData(boxData => [...boxData, {
      boxInfo: { ...params },
      commodities: [],
    }]);
  }, []);

  const handleUpdateBox = useCallback((newBox) => {
    if (!newBox.boxInfo.name) {
      throw new Error('Box name can not be empty');
    } else if (newBox.boxInfo.name.length > 24) {
      throw new Error('Box name is limited to max length of 24');
    }

    const targetBox = boxData[curBoxIndex];
    Object.assign(targetBox, newBox);
    boxData.splice(curBoxIndex, 1, targetBox);
    setBoxData([...boxData]);
  }, [boxData, curBoxIndex]);

  const handleRemoveBox = useCallback((boxId) => {
    const boxIndex = boxData.findIndex(it => it.boxInfo.id === boxId);
    if (boxIndex >= 0) {
      (mayFailCall(() => {
        boxData.splice(boxIndex, 1);
        setBoxData([...boxData]);
      }))();
    }
  }, [boxData])

  return (
    <div className="box-grid">
      <div className="box-grid-item-wrap">
        <div className="box-create">
        <div className="tags"></div>
        <div className="banner">
          <div className="title">New Box</div>
        </div>
        <div className="description">
          Create a new box for your audience.
        </div>
        <div className="image">
          <img src={boxImg} />
        </div>
        <div className="button">
          <button type="button" onClick={() => setCreateModalVisible(true)}>Create</button>
        </div>
      </div>
      </div>
      {
        boxData.map((it, index) => (
          <div className="box-grid-item-wrap" key={index}>
            <BoxItem
              data={it.boxInfo}
              onShowDetail={() => handleShowDetailBox(index)}
              onRemove={handleRemoveBox}
            />
          </div>
        ))
      }

      <BoxCreateModal
        visible={createModalVisible}
        onClose={() => setCreateModalVisible(false)}
        onSave={handleCreateBox}
      />
      <BoxDetailDrawer
        data={boxData[curBoxIndex]}
        visible={detailDrawerVisible}
        onClose={() => setDetailDrawerVisible(false)}
        onSave={handleUpdateBox}
      />
    </div>
  );
}

export default BoxGrid;
