import React, { useState } from 'react';
import { Avatar, Card, Button } from 'antd';
const { Meta } = Card;

function Messages() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            name: "Alice",
            message: "Bonjour, je voulais savoir si ma commande a été expédiée."
        },
        {
            id: 2,
            name: "Bob",
            message: "Bonjour, pouvez-vous me dire où en est ma livraison ?"
        },
        {
            id: 3,
            name: "Charlie",
            message: "Salut, j'aimerais savoir quand est-ce que ma commande sera livrée."
        },
        {
            id: 4,
            name: "Diana",
            message: "Bonjour, je voudrais suivre ma commande s'il vous plaît."
        }
    ]);

    const handleDeleteMessage = (id) => {
        setMessages(messages.filter(message => message.id !== id));
    };

    return (
        <div>
            <h1 className='text-primary font-poppins font-bold text-2xl mb-4'>Messages :</h1>
            <div className='w-[700px] h-[500px] p-3 bg-white rounded-lg flex flex-wrap gap-2 justify-around overflow-y-scroll'>
                {messages.length === 0 ? (
                    <p>Votre boîte de messages est vide.</p>
                ) : (
                    messages.map((message) => (
                        <Card
                            key={message.id}
                            style={{
                                width: 300,
                                marginTop: 16,
                                border: '1px dashed gray'
                            }}
                            actions={[
                                <Button onClick={() => handleDeleteMessage(message.id)} key="delete" type="primary" danger ghost>Supprimer</Button>
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${message.id}`} />}
                                title={message.name}
                                description={message.message}
                            />
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}

export default Messages;
