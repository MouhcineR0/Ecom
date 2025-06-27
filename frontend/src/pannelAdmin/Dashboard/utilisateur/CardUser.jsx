import React, { useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card, Empty, message } from 'antd';
import EditUser from './EditUser';
import { DeleteSingleUser, GetUsers } from '../../../features/User/UserFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../../features/User/UserSlice';

const { Meta } = Card;

const CardUser = () => {

    const dispatch = useDispatch();
    const UserData = useSelector(state => state.user.Users);

    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        dispatch(GetUsers());
    }, [])

    const handleDelete = async (id) => {
        dispatch(setError(false));
        messageApi.open({
            type: 'loading',
            duration: 1000000,
            content: "Adding user loading",
            key: "loadingaddinguser"
        })
        try {
            await dispatch(DeleteSingleUser({ _id: id })).unwrap();
            messageApi.destroy("loadingdeletinguser");
            if (UserData.error)
                message.error("deleting user failed");
            else
                message.success("user deleted");
        }
        catch {
            message.error("deleting user failed");
        }
        finally {
            // dispatch(GetUsers());
        }

    };

    return (
        <div className='flex gap-5 flex-wrap p-5 rounded-md mt-4 bg-white'>
            {UserData.length > 0 ?
                UserData.map((ele, ind) => {

                    const datenow = new Date(ele.created_at);
                    const month = datenow.getMonth();
                    const day = datenow.getDay();
                    const year = datenow.getFullYear();
                    return (
                        <Card
                            key={ind}
                            style={{
                                width: 300,
                                marginTop: 16,
                                outline: '2px dashed gray'
                            }}
                            actions={[
                                <EditUser user={ele} />,
                                <DeleteOutlined key="ellipsis" onClick={() => handleDelete(ele._id)} />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
                                title={`${ele.firstname} ${ele.lastname}`}
                                description={(
                                    <div>
                                        <p>Email: </p>
                                        <p>{ele.email}</p>
                                        <p>Phone Number: </p>
                                        <p>{ele.tel}</p>
                                        <p>Role:</p>
                                        <p>{ele.role}</p>
                                        <p>Member Sense: {`${day}/${month}/${year}`}</p>
                                    </div>
                                )}
                            />
                        </Card>
                    )
                }
                )
                :
                <Empty />
            }
        </div>
    );
};

export default CardUser;
