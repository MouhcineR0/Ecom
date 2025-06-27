import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Option } = Select;

const EditUser = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.submit();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        console.log('Received values:', values);
        // Vous pouvez gérer les valeurs reçues ici
    };

    return (
        <>
            <EditOutlined
                key="edit"
                onClick={showModal}
            />

            <Modal title="Modifier Utilisateur" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                    name="editUserForm"
                    initialValues={user}
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        label="Prénom"
                        name="firstname"
                        rules={[{ required: true, message: 'Veuillez saisir le prénom!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Nom"
                        name="lastname"
                        rules={[{ required: true, message: 'Veuillez saisir le nom!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Veuillez saisir l\'email!' }]}
                    >
                        <Input type="email" />
                    </Form.Item>

                    <Form.Item
                        label="Téléphone"
                        name="tel"
                        rules={[{ required: true, message: 'Veuillez saisir le numéro de téléphone!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Rôle"
                        name="role"
                        rules={[{ required: true, message: 'Veuillez sélectionner le rôle!' }]}
                    >
                        <Select>
                            <Option value="Admin">Admin</Option>
                            <Option value="Client">Client</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default EditUser;
