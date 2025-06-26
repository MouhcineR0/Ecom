import React, { useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card, Empty } from 'antd';
import EditUser from './EditUser';

const { Meta } = Card;

const CardUser = () => {
    const [membres, setMembres] = useState([
        {
            prenom: 'Alice',
            nom: 'Dupont',
            email: 'alice.dupont@example.com',
            tel: '0123456789',
            role: 'Admin',
            membreDepuis: '2020-01-15'
        },
        {
            prenom: 'Bob',
            nom: 'Martin',
            email: 'bob.martin@example.com',
            tel: '0987654321',
            role: 'Client',
            membreDepuis: '2021-06-23'
        },
        {
            prenom: 'Claire',
            nom: 'Durand',
            email: 'claire.durand@example.com',
            tel: '0156789345',
            role: 'Admin',
            membreDepuis: '2019-11-02'
        },
        {
            prenom: 'David',
            nom: 'Lefevre',
            email: 'david.lefevre@example.com',
            tel: '0223344556',
            role: 'Client',
            membreDepuis: '2022-03-19'
        },
        {
            prenom: 'Eva',
            nom: 'Rousseau',
            email: 'eva.rousseau@example.com',
            tel: '0335566778',
            role: 'Admin',
            membreDepuis: '2018-09-10'
        }
    ]);

    useEffect(() => {
        // dispatch()
    }, [])

    const handleDelete = (index) => {
        setMembres(membres.filter((_, ind) => ind !== index));
    };

    return (
        <div className='flex gap-5 flex-wrap p-5 rounded-md mt-4 bg-white'>
            {membres.length > 0 ?
                membres.map((ele, ind) => (
                    <Card
                        key={ind}
                        style={{
                            width: 300,
                            marginTop: 16,
                            outline: '2px dashed gray'
                        }}
                        actions={[
                            <EditUser user={ele} />,
                            <DeleteOutlined key="ellipsis" onClick={() => handleDelete(ind)} />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
                            title={`${ele.prenom} ${ele.nom}`}
                            description={(
                                <div>
                                    <p>Email: </p>
                                    <p>{ele.email}</p>
                                    <p>Téléphone: </p>
                                    <p>{ele.tel}</p>
                                    <p>Rôle:</p>
                                    <p>{ele.role}</p>
                                    <p>Membre depuis: </p>
                                    <p>Membre depuis: {ele.membreDepuis}</p>
                                </div>
                            )}
                        />
                    </Card>
                ))
                :
                <Empty />
            }
        </div>
    );
};

export default CardUser;
