import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Empty } from 'antd';
import EditPro from './EditPro';

const { Meta } = Card;

function CardPro() {
    const initialData = [
        { name: "ak-900 wired keyboard", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130076/products/liodquuyu5cfsykpoxvd.png' },
        { name: "ips lcd gaming monitor", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130365/products/pqutvfxms5jiyyvh6mdp.png' },
        { name: "ips lcd gaming monitor", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130365/products/pqutvfxms5jiyyvh6mdp.png' },
        { name: "s-series comfort chair", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130550/products/m9yndyohzh5dxrhol6qr.png' },
        { name: "s-series comfort chair", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130550/products/m9yndyohzh5dxrhol6qr.png' },
        { name: "s-series comfort chair", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130550/products/m9yndyohzh5dxrhol6qr.png' },
        { name: "s-series comfort chair", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130550/products/m9yndyohzh5dxrhol6qr.png' },
        { name: "s-series comfort chair", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130550/products/m9yndyohzh5dxrhol6qr.png' },
        { name: "s-series comfort chair", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130550/products/m9yndyohzh5dxrhol6qr.png' },
        { name: "gucci duffle bag", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130743/products/nilhneqxqsmqurs3shmq.png' }
    ];

    const [data, setData] = useState(initialData);

    const handleDelete = (index) => {
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
    };

    return (
        <div className='flex gap-5 flex-wrap p-5 rounded-md mt-4 bg-white'>
            {data.length > 0 ?
                data.map((ele, ind) => (
                    <Card
                        key={ind}
                        style={{
                            width: 200,
                            outline: '2px dashed gray'
                        }}
                        cover={
                            <img
                                alt="example"
                                src={ele.image}
                                style={{
                                    objectFit: 'contain',
                                    backgroundColor: '#F5F5F5',
                                    height: 150
                                }}
                            />
                        }
                        actions={[
                            <EditPro key="edit" product={ele} />,
                            <DeleteOutlined key="delete" onClick={() => handleDelete(ind)} />,
                        ]}
                    >
                        <Meta title={ele.name} />
                    </Card>
                )) : (<Empty />)
            }
        </div>
    );
}

export default CardPro;
