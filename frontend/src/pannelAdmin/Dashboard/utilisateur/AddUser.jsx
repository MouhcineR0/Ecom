import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';

const { Option } = Select;

const AddUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        console.log('Received values:', values);
        // Vous pouvez gérer les valeurs reçues ici
        setIsModalOpen(false); // Ferme le modal après la soumission du formulaire
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
                title="Ajouter un nouvel Utilisateur"
                visible={isModalOpen}
                onCancel={handleCancel}
                footer={null} // Pour supprimer le footer contenant les boutons "Ok" et "Annuler"
            >
                <Form
                    name="addUserForm"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        label="Prénom"
                        name="prenom"
                        rules={[{ required: true, message: 'Veuillez saisir le prénom!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Nom"
                        name="nom"
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

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Ajouter
                        </Button>
                        <Button onClick={handleCancel} style={{ marginLeft: 8 }}>
                            Annuler
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddUser;
