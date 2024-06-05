import React, { useRef } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import Draggable from 'react-draggable';

function Ajouter({ open, handleOk, handleCancel, disabled, setDisabled, bounds, onStart }) {
    const [form] = Form.useForm();
    const draggleRef = useRef(null);

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
                    onFocus={() => { }}
                    onBlur={() => { }}
                >
                    Ajouter une nouvelle categorie
                </div>
            }
            visible={open}
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
                <Form.Item label="Name :">
                    <Input placeholder="Saisire le Nom de categorie" />
                </Form.Item>
                <Form.Item label="SVG :">
                    <Input placeholder="Saisire l'SVG " />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default Ajouter;
