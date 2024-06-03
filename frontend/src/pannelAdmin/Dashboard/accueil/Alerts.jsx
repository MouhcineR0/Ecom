import React, { useState } from 'react';
import { List, Button } from 'antd';

const initialData = [
    {
        title: 'Ant Design Title 1',
        description: 'Veuillez vérifier votre stock car votre produit est épuisé'
    },
    {
        title: 'Ant Design Title 2',
        description: 'Veuillez vérifier votre stock car votre produit est épuisé'
    },
    {
        title: 'Ant Design Title 3',
        description: 'Veuillez vérifier votre stock car votre produit est épuisé'
    },
    {
        title: 'Ant Design Title 4',
        description: 'Veuillez vérifier votre stock car votre produit est épuisé'
    },
];

function Alerts() {
    const [data, setData] = useState(initialData);

    const handleDelete = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    return (
        <div>
            <h1 className='text-primary font-poppins font-bold text-2xl mb-4'>Alerts :</h1>
            <div className='w-[400px]'>
                <div className='h-[500px] p-3 bg-white rounded-lg overflow-y-scroll'>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item
                                actions={[
                                    <Button type="primary" danger onClick={() => handleDelete(index)} key="delete">
                                        Supprimer
                                    </Button>
                                ]}
                                style={{ display: 'flex', alignItems: 'center' }}
                            >
                                <List.Item.Meta
                                    title={item.title}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export default Alerts;
