import React, { useState, useEffect, useCallback } from 'react';
import { Drawer, Spin } from '@arco-design/web-react';

import { DEFINITION, subscribe, unsubscribe } from '../../../event';
import { showMsg } from '../../notification/showMsg';
import BoxInfo from './BoxInfo';
import ProductInfo from './ProductInfo';
import CommodityTable from './CommodityTable';

import { waitToCall } from '../../../../test/util';

import './box-detail.css';

const BoxDetailDrawer = (props) => {
  const { data, visible, onClose, onSave } = props;

  const [localData, setLocalData] = useState();
  const [loading, setLoading] = useState(false);

  const updateLocalData = useCallback(({ detail }) => {
    const { name, description } = detail || {};
    let newLocalData = localData || JSON.parse(JSON.stringify(data));
    let { boxInfo } = newLocalData;
    if (boxInfo) {
      if (name !== undefined) {
        boxInfo.name = name;
      }
      if (description !== undefined) {
        boxInfo.description = description;
      }
      setLocalData({ ...newLocalData });
    }
  }, [localData, data]);

  const handleClose = useCallback(() => {
    if (localData) {
      setLoading(true);
      waitToCall(() => {
        try {
          onSave(localData);
          onClose();
          setLocalData(undefined);
        } catch (err){
          showMsg({ msg: err.message });
        }
      }, 500, () => {
        setLoading(false);
      });
    } else {
      onClose();
    }
  }, [localData]);

  useEffect(() => {
    subscribe(DEFINITION.BOX_UPDATE, updateLocalData);
    return () => {
      unsubscribe(DEFINITION.BOX_UPDATE, updateLocalData);
    }
  }, [updateLocalData]);

  return (
    <Drawer
      width="75%"
      className="box-detail-drawer"
      title={<span>Box Details</span>}
      visible={visible}
      closable={false}
      headerStyle={{ border: 'none' }}
      footer={null}
      onCancel={handleClose}
    >
      <Spin loading={loading}>
        <div className="main">
          { 
            !data ? null : (
              <>
                <input type="text" autoFocus className="hiddenInput" />
                <div className="sections">
                  <BoxInfo data={(localData || data).boxInfo} />
                  <ProductInfo />
                </div>
                <div className="buttons">
                  <div className="button cur">Box - commodities</div>
                  <div className="button">Unbox logic</div>
                  <div className="button">Unbox records</div>
                  <div className="button">Publish status</div>
                </div>
                <CommodityTable data={data.commodities} />
              </>
            )
          }
        </div>
      </Spin>
    </Drawer>
  )
}

export default BoxDetailDrawer;
