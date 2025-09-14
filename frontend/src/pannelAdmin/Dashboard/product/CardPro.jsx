import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Empty, message } from 'antd';
import EditPro from './EditPro';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DelProduct, GetProducts } from '../../../features/Product/ProductFunctions';

const { Meta } = Card;

const initialData = [
    // { name: "ak-900 wired keyboard", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130076/products/liodquuyu5cfsykpoxvd.png' },
    // { name: "ips lcd gaming monitor", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130365/products/pqutvfxms5jiyyvh6mdp.png' },
    // { name: "ips lcd gaming monitor", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130365/products/pqutvfxms5jiyyvh6mdp.png' },
    // { name: "s-series comfort chair", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130550/products/m9yndyohzh5dxrhol6qr.png' },
    // { name: "s-series comfort chair", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130550/products/m9yndyohzh5dxrhol6qr.png' },
    // { name: "s-series comfort chair", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130550/products/m9yndyohzh5dxrhol6qr.png' },
    // { name: "s-series comfort chair", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130550/products/m9yndyohzh5dxrhol6qr.png' },
    // { name: "s-series comfort chair", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130550/products/m9yndyohzh5dxrhol6qr.png' },
    // { name: "s-series comfort chair", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130550/products/m9yndyohzh5dxrhol6qr.png' },
    // { name: "gucci duffle bag", image: 'https://res.cloudinary.com/dcsntez6c/image/upload/v1714130743/products/nilhneqxqsmqurs3shmq.png' }
];
function CardPro() {

    // const [data, setData] = useState(Products);

    const Products = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const [messageApi, contextHolder] = message.useMessage();

    const handleDelete = async (_id) => {
        try {
            message.open({
                type: "loading",
                key: 'loading01',
                content: "Deleting Item"
            })
            await dispatch(DelProduct(_id)).unwrap();
            await dispatch(GetProducts()).unwrap();
            message.destroy("loading01");
        }
        catch {
            message.error("Failing deleting product");
        }
    };


    // useEffect(() => {
    //     const getPro = async () => {
    //         try {
    //             await dispatch(GetProducts()).unwrap();
    //         }
    //         catch (err) {
    //             message.error("Failing getting products");
    //         }
    //     }
    //     getPro();
    // }, [])
    // console.log(Products);

    return (
        <div className='flex gap-5 flex-wrap p-5 rounded-md mt-4 bg-white'>
            {Products?.products?.length > 0 ?
                Products.products.map((ele, ind) => (
                    <Card
                        key={ind}
                        style={{
                            width: 200,
                            outline: '2px dashed gray'
                        }}
                        cover={
                            <img
                                alt="example"
                                src={ele.imagepath.url}
                                style={{
                                    objectFit: 'contain',
                                    backgroundColor: '#F5F5F5',
                                    height: 150
                                }}
                            />
                        }
                        actions={[
                            <EditPro key="edit" product={ele} />,
                            <DeleteOutlined key="delete" onClick={() => handleDelete(ele._id)} />,
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
