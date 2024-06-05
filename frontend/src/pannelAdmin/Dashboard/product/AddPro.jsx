import React, { useState, useRef } from 'react';
import { Modal, Button, Form, Input, Select, InputNumber, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';

const { TextArea } = Input;

function AddPro({ open, handleCancel, disabled, setDisabled, bounds, onStart }) {
    const [form] = Form.useForm();
    const draggleRef = useRef(null);
    const [formData, setFormData] = useState({});

    const formItemLayout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 14,
        },
    };

    const buttonItemLayout = {
        wrapperCol: {
            span: 14,
            offset: 4,
        },
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const handleOk = () => {
        form.validateFields().then((values) => {
            setFormData(values);
            console.log('Form Data:', values); // Log les données du formulaire
            form.resetFields();
            handleCancel(); // Fermer le modal
        }).catch((info) => {
            console.log('Validate Failed:', info);
        });
    };

    return (
        <Modal
            title={
                <div
                    style={{
                        width: '100%',
                        cursor: 'move',
                    }}
                    onMouseOver={() => {
                        if (disabled) {
                            setDisabled(false);
                        }
                    }}
                    onMouseOut={() => {
                        setDisabled(true);
                    }}
                >
                    Ajouter une nouvelle categorie
                </div>
            }
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            modalRender={(modal) => (
                <Draggable
                    disabled={disabled}
                    bounds={bounds}
                    nodeRef={draggleRef}
                    onStart={(event, uiData) => onStart(event, uiData)}
                >
                    <div ref={draggleRef}>{modal}</div>
                </Draggable>
            )}
        >
            <Form
                {...formItemLayout}
                layout="horizontal"
                form={form}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item name="name" label="Name :" rules={[{ required: true, message: 'Please input the name!' }]}>
                    <Input placeholder="Saisir le Nom de Produit" />
                </Form.Item>
                <Form.Item name="type" label="Type :" rules={[{ required: true, message: 'Please input the type!' }]}>
                    <Input placeholder="Saisir le type" />
                </Form.Item>
                <Form.Item name="select" label="Select :" rules={[{ required: true, message: 'Please select an option!' }]}>
                    <Select>
                        <Select.Option value="electronics">electronics</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="price" label="Price :" rules={[{ required: true, message: 'Please input the price!' }]}>
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item name="quantity" label="Quantité :" rules={[{ required: true, message: 'Please input the quantity!' }]}>
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item name="promotion" label="Promotion :" rules={[{ required: true, message: 'Please input the promotion!' }]}>
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item name="image" label="Image" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item name="description" label="Description :">
                    <TextArea rows={4} placeholder="Ajouter une description" />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" onClick={handleOk}>Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default AddPro;
