import React from 'react';
import { Modal } from '@arco-design/web-react';

const ERROR_CODE = {

}

function showMsg(params, type = 'error') {
  const { title, code, msg, okText, onOk } = params;
  let formatMsg = code && ERROR_CODE[code] ? ERROR_CODE[code] : msg;
  
  const config = {
    title: title || 'Error Notification',
    content:
      <div style={{ textAlign: 'center' }}>
        {formatMsg}
      </div>,
    okText: okText || 'Ok',
    onOk,
  }

  Modal[type]?.(config);
}

export {
  showMsg,
};
