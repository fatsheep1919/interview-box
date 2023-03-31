import React, { useRef, useState, useCallback } from 'react';
import { Modal, Spin, Form, Input, Button, Select } from '@arco-design/web-react';

import { TAG_NAMES } from '../../tag';

import { waitToCall } from '../../../../test/util';

import './box-create.css';

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const Option = Select.Option;

const BoxCreateModal = (props) => {
  const { visible, onClose, onSave } = props;
  const formRef = useRef();

  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [tags, setTags] = useState([]);

  const [submitting, setSubmitting] = useState(false);

  const handleNameInput = useCallback((value) => setNameInput(value), []);
  const handleDeacriptionInput = useCallback((value) => setDescriptionInput(value), []);
  const handleTagChange = useCallback(value => setTags(value), []);

  const handleCreate = useCallback(async () => {
    if (formRef.current) {
      try {
        await formRef.current.validate();
        setSubmitting(true);
        waitToCall(() => onSave({ name: nameInput, description: descriptionInput, tags }), 1000, () => {
          setSubmitting(false);
          onClose();
        });
      } catch (err) {
      }
    }
  }, [formRef, nameInput, descriptionInput, tags]);

  const reset = useCallback(() => {
    setNameInput('');
    setDescriptionInput('');
    setTags([]);

    formRef.current.resetFields();
    setSubmitting(false);
  }, [formRef]);

  return (
    <Modal
      className="box-create-modal"
      title={<div style={{ textAlign: 'left' }}>Create Box</div>}
      visible={visible}
      onOk={onClose}
      onCancel={onClose}
      autoFocus={false}
      focusLock={true}
      footer={null}
      afterClose={reset}
      maskClosable={false}
    >
      <Spin loading={submitting}>
        <Form ref={formRef} autoComplete='off' layout='vertical'>
          <FormItem
            label='Box Name'
            field="name"
            rules={[
              { required: true, message: 'Box name is required' },
              { maxLength: 24, validateLevel: 'error', message: 'Box name is limited to max length of 24' }
            ]}
          >
            <Input
              placeholder='please enter box name'
              style={{ width: 270 }}
              value={nameInput}
              onChange={handleNameInput}
            />
          </FormItem>
          <FormItem
            label='Box Description'
            field='description'
            rules={[{ maxLength: 100, validateLevel: 'error', message: 'Box description is too long' }]}
          >
            <TextArea
              placeholder='Please enter box description'
              value={descriptionInput}
              onChange={handleDeacriptionInput}
            />
          </FormItem>
          <FormItem label='Tag'>
            <Select
              mode='multiple'
              placeholder='Please select tag'
              allowClear
              value={tags}
              onChange={handleTagChange}
            >
              {
                TAG_NAMES.map((option) => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))
              }
            </Select>
          </FormItem>
        </Form>
        <div className="buttons">
          <Button type='outline' onClick={onClose}>Cancel</Button>
          <Button type='primary' onClick={handleCreate}>Create</Button>
        </div>
      </Spin>
    </Modal>
  );
}

export default BoxCreateModal;
