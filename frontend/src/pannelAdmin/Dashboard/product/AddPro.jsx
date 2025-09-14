import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button, Form, Input, Select, InputNumber, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategories } from '../../../features/Category/CategoryFunctions';
import { GetProducts, SetProduct } from '../../../features/Product/ProductFunctions';

const { TextArea } = Input;

function AddPro() {
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const [messageApi, contextHolder] = message.useMessage();

    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    });
    const draggleRef = useRef(null);

    const dispatch = useDispatch();
    const Category = useSelector(state => state.category);

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
        form.validateFields().then(async (values) => {
            try {
                values.image = values.image[0].originFileObj;
                const newFormdata = new FormData();
                Object.keys(values).forEach((ele) => {
                    newFormdata.append(ele, values[ele]);
                })
                message.open({
                    type: "loading",
                    key: 'loading01',
                    content: "Adding an Item"
                })
                await dispatch(SetProduct(newFormdata)).unwrap();
                await dispatch(GetProducts()).unwrap();
                message.destroy("loading01");
                form.resetFields();
                setOpen(false);

            }
            catch (err) {

            }
        }).catch((info) => {
            // console.log('Validate Failed:', info);
        });
    };

    // redux functions



    return (
        <>
            <Button
                onClick={showModal}
                className='bg-blue-500 text-white hover:bg-blue-700'
            >
                Add new Product
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
                    <Form.Item name="type" label="Type :" rules={[{ required: false, message: 'Veuillez saisir le type!' }]}>
                        <Input placeholder="Saisir le type" />
                    </Form.Item>
                    <Form.Item name="categorie" label="Sélectionner :" rules={[{ required: true, message: 'Veuillez sélectionner une option!' }]}>
                        <Select>
                            {
                                Category.data.length ?
                                    Category?.data.map((ele, index) => (
                                        <Select.Option key={index} value={ele.name}>{ele.name}</Select.Option>
                                    ))
                                    :
                                    null
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item name="price" label="Prix :" rules={[{ required: true, message: 'Veuillez saisir le prix!' }]}>
                        <InputNumber min={0} />
                    </Form.Item>
                    <Form.Item name="quantity" label="Quantité :" rules={[{ required: true, message: 'Veuillez saisir la quantité!' }]}>
                        <InputNumber min={0} />
                    </Form.Item>
                    <Form.Item name="promo" label="Promotion :" rules={[{ required: true, message: 'Veuillez saisir la promotion!' }]}>
                        <InputNumber min={0} />
                    </Form.Item>
                    <Form.Item name="image" label="Image" valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload beforeUpload={() => false} name='image' action="/upload.do" listType="picture-card" maxCount={1}>
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
