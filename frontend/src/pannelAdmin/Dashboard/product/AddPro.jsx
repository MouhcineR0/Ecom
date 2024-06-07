import React, { useState, useRef } from 'react';
import { Modal, Button, Form, Input, Select, InputNumber, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';

const { TextArea } = Input;

function AddPro() {
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    });
    const draggleRef = useRef(null);

    const showModal = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        console.log(e);
        setOpen(false);
    };

    const onStart = (_event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };

    const [form] = Form.useForm();

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
            console.log('Form Data:', values); // Log les données du formulaire
            form.resetFields();
            setOpen(false); // Fermer le modal
        }).catch((info) => {
            console.log('Validate Failed:', info);
        });
    };

    return (
        <>
            <Button
                onClick={showModal}
                className='bg-blue-500 text-white hover:bg-blue-700'
            >
                Ajouter un nouveau Produit
            </Button>
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
                        Ajouter un nouveau produit :
                    </div>
                }
                open={open}
                onCancel={handleClose}
                footer={[
                    <Button key="cancel" onClick={handleClose}>
                        Annuler
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Ajouter
                    </Button>,
                ]}
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
                    <Form.Item name="name" label="Nom :" rules={[{ required: true, message: 'Veuillez saisir le nom!' }]}>
                        <Input placeholder="Saisir le Nom de Produit" />
                    </Form.Item>
                    <Form.Item name="type" label="Type :" rules={[{ required: true, message: 'Veuillez saisir le type!' }]}>
                        <Input placeholder="Saisir le type" />
                    </Form.Item>
                    <Form.Item name="select" label="Sélectionner :" rules={[{ required: true, message: 'Veuillez sélectionner une option!' }]}>
                        <Select>
                            <Select.Option value="electronics">Électronique</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="price" label="Prix :" rules={[{ required: true, message: 'Veuillez saisir le prix!' }]}>
                        <InputNumber min={0} />
                    </Form.Item>
                    <Form.Item name="quantity" label="Quantité :" rules={[{ required: true, message: 'Veuillez saisir la quantité!' }]}>
                        <InputNumber min={0} />
                    </Form.Item>
                    <Form.Item name="promotion" label="Promotion :" rules={[{ required: true, message: 'Veuillez saisir la promotion!' }]}>
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
                </Form>
            </Modal>
        </>
    );
}

export default AddPro;
