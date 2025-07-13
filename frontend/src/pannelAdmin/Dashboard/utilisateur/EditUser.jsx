import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateSingleUser } from '../../../features/User/UserFunctions';


const { Option } = Select;

const EditUser = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const [messageApi, contextHolder] = message.useMessage();

    const dispatch = useDispatch();
    const userObj = useSelector(state => state.user);

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

    const onFinish = async (data) => {
        try {
            messageApi.open({
                type: 'loading',
                duration: 1000000,
                content: "Adding user loading",
                key: "loadingupdatinguser"
            })
            await dispatch(UpdateSingleUser(data)).unwrap();
            messageApi.destroy("loadingupdatinguser");
            if (!userObj.error) {
                messageApi.success("User modified");
            }
            else
                messageApi.error("Something went wrong");
        }
        catch {
            messageApi.error("Something went wrong !!");
        }

    };

    return (
        <>
            {contextHolder}
            <EditOutlined
                key="edit"
                onClick={showModal}
            />

            <Modal title="Modifier Utilisateur" okText={"Submit"} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                    name="editUserForm"
                    initialValues={user}
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
                        <Input type="email" disabled />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="tel"
                        rules={[{ required: true, message: 'Veuillez saisir le numéro de téléphone!' }]}
                    >
                        <Input />
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
                </Form>
            </Modal>
        </>
    );
};

export default EditUser;
