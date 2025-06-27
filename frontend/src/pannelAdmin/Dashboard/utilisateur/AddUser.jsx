import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AddSingleUser, GetUsers } from '../../../features/User/UserFunctions';
import { setError } from '../../../features/User/UserSlice';

const { Option } = Select;

const AddUser = () => {

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    const Users = useSelector(state => state.user);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    const onFinish = async (values) => {
        console.log(Users);
        dispatch(setError(false));
        messageApi.open({
            type: 'loading',
            duration: 1000000,
            content: "Adding user loading",
            key: "loadingaddinguser"
        })
        try {
            await dispatch(AddSingleUser(values)).unwrap();
            messageApi.destroy("loadingaddinguser");
            if (Users.error) {

                messageApi.error("Adding User failed");
            }
            else {
                messageApi.success("Adding user success");
                setIsModalOpen(false);
            }
        }
        catch {
            messageApi.destroy("loadingaddinguser");
            messageApi.error("Adding User failed");
        }
        finally {
            dispatch(GetUsers());
        }
    };

    return (
        <>
            {contextHolder}
            <Button
                onClick={showModal}
                className='bg-blue-500 text-white hover:bg-blue-700'
            >
                Add new User
            </Button>
            <Modal
                title="Ajouter un nouvel Utilisateur"
                visible={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    form={form}
                    name="addUserForm"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        label="First Name"
                        name="firstname"
                        rules={[{ required: true, message: 'Veuillez saisir le prénom!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
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
                        label="Number Phone"
                        name="tel"
                        rules={[{ required: true, message: 'Veuillez saisir le numéro de téléphone!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Veuillez saisir le numéro de téléphone!' }]}
                    >
                        <Input type='password' />
                    </Form.Item>

                    <Form.Item
                        label="Role"
                        name="role"
                        rules={[{ required: true, message: 'Veuillez sélectionner le rôle!' }]}
                    >
                        <Select>
                            <Option value="admin">Admin</Option>
                            <Option value="client">Client</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Ajouter
                        </Button>
                        <Button onClick={handleCancel} style={{ marginLeft: 8 }}>
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddUser;
