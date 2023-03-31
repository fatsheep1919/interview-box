import React, { useCallback, useState, useEffect } from 'react';
import { Input, Button, Table, Dropdown, Menu, Spin } from '@arco-design/web-react';
import { IconSearch, IconDown, IconFilter, IconCalendar, IconSend, IconSort } from '@arco-design/web-react/icon';

import { showMsg } from '../../notification/showMsg';

import { waitToCall } from '../../../../test/util';
import { testBoxData } from '../../../../test/data';

import './box-detail.css';

const columns = [
  {
    title: <div>Order Date <IconSort /></div>,
    dataIndex: 'orderDate',
  },
  {
    title: <div>unbox logic <IconSort /></div>,
    dataIndex: 'unboxLogic',
  },
  {
    title: <div>Unit Price <IconSort /></div>,
    dataIndex: 'unitPrice',
  },
  {
    title: <div>Qty <IconSort /></div>,
    dataIndex: 'qty',
  },
  {
    title: <div>Discount <IconSort /></div>,
    dataIndex: 'discount',
  },
  {
    title: <div>Order Total <IconSort /></div>,
    dataIndex: 'orderTotal',
  },
];

const CommodityTable = (props) => {
  const { data } = props;

  const [localData, setLocalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleLoad = useCallback(() => {
    setLoading(true);
    waitToCall(
      () => setLocalData(JSON.parse(JSON.stringify(testBoxData[0].commodities))),
      1000,
      () => {
        setSelectedRowKeys([]);
        setLoading(false);
      }
    );
  }, []);

  const handleBatchRemove = useCallback(() => {
    showMsg({
      okText: 'Refresh Commodities',
      onOk: handleLoad,
      msg: 'Failed to remove commodities. Please click the button below to refresh commodities and try again.',
    });
  }, [handleLoad]);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  return (
    <div className="table">
      {
        localData ? (
          <Spin loading={loading}>
            <div className="head">
              <div className="title">Commodities in the box</div>
              <div className="actions">
                <Input style={{ width: 125 }} prefix={<IconSearch />} placeholder='Search' />
                <Button type='outline' icon={<IconFilter />}>Filter</Button>
                <Button type='outline' icon={<IconCalendar />}>Filter</Button>
                <Button type='outline' icon={<IconSend />}>Share</Button>
                <Dropdown.Button
                  trigger='click'
                  droplist={
                    <Menu>
                      <Menu.Item key='1' onClick={handleBatchRemove}>Remove</Menu.Item>
                    </Menu>
                  }
                  icon={<IconDown />}
                  disabled={selectedRowKeys?.length === 0}
                >
                  Bulk Action
                </Dropdown.Button>
              </div>
            </div>
            <div className="content">
              <Table
                rowKey="id"
                columns={columns}
                data={localData}
                rowSelection={{
                  type: 'checkbox',
                  selectedRowKeys,
                  checkAll: true,
                  onChange: (selectedRowKeys, selectedRows) => {
                    setSelectedRowKeys(selectedRowKeys);
                  },
                }}
                border={false}
                style={{ marginTop: 10, }}
                pagination={false}
                noDataElement={<></>}
              />
            </div>
          </Spin>
        ) : (
          <Spin loading={loading}>
            <div className="errMsg">
              Failed loading commodities.
              <Button type='text' onClick={handleLoad}>Click Here</Button> to retry.
            </div>
          </Spin>
        )
      }
    </div>
  );
}

export default CommodityTable;
