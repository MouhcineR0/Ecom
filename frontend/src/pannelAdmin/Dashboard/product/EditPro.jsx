import React, { useState, useRef } from 'react';
import { Modal, Button, Form, Input, Select, InputNumber, Upload, message } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { EditProduct, GetProducts } from '../../../features/Product/ProductFunctions';

const { TextArea } = Input;

function EditPro({ product }) {


    const Category = useSelector(state => state.category);

    const dispatch = useDispatch();

    const [messageApi, contextHolder] = message.useMessage();

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
        form.setFieldsValue({
            name: product.name,
            type: product.type,
            select: product.select,
            price: product.price,
            quantity: product.quantity,
            promo: product.promo,
            description: product.description,
            categorie: product.categorie
            // image: [
            //     {
            //         url: product.image,
            //         name: 'image.png',
            //         uid: '-1',
            //     },
            // ],
        });
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
            message.open({
                type: "loading",
                key: 'loading01',
                content: "Adding an Item"
            })
            values._id = product._id;
            // console.log('Form Data:', values); // Log les données du formulaire
            await dispatch(EditProduct(values)).unwrap();
            await dispatch(GetProducts()).unwrap();
            message.destroy("loading01");
            setOpen(false);
            form.resetFields();
        }).catch((info) => {
            message.error("Failing Updating an item")
            // console.log('Validate Failed:', info);
        });
    };
    console.log(product)
    return (
        <>
            <EditOutlined onClick={showModal} />
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
                        Modifier un produit
                    </div>
                }
                open={open}
                onOk={handleOk}
                onCancel={handleClose}
                okText="Update"
                cancelText="Undo"
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
                        <Input placeholder="Saisir le nom du produit" />
                    </Form.Item>
                    <Form.Item name="type" label="Type :" rules={[{ required: true, message: 'Veuillez saisir le type!' }]}>
                        <Input placeholder="Saisir le type" />
                    </Form.Item>
                    <Form.Item name="categorie" initialValue={product.categorie} label="Sélectionner :" rules={[{ required: true, message: 'Veuillez sélectionner une option!' }]}>
                        <Select>
                            {
                                Category?.data?.map((ele, ind) => {
                                    return (
                                        <Select.Option value={ele.name}>{ele.name}</Select.Option>
                                    )
                                })
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
                    {/* <Form.Item name="image" label="Image" valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload
                            action="/upload.do"
                            listType="picture-card"
                            defaultFileList={[
                                {
                                    uid: '-1',
                                    name: 'image.png',
                                    status: 'done',
                                    url: product.image,
                                },
                            ]}
                        >
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        </Upload>
                    </Form.Item> */}
                    <Form.Item name="description" label="Description :">
                        <TextArea rows={4} placeholder="Add Description" />
                    </Form.Item>

                </Form>
            </Modal>
        </>
    );
}

export default EditPro;
