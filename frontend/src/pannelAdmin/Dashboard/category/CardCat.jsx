import React, { useEffect, useState } from 'react';
import { Card, Dropdown, Menu, Empty, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DelCategorie, GetCategories } from '../../../features/Category/CategoryFunctions';
import { ModifySVG } from '../../../components/Home/Categories/Categorie';
import useWidth from '../../../hooks/useWidth';

const CardCat = () => {
  const Width = useWidth();

  const dispatch = useDispatch();
  const CategoryObj = useSelector(state => state.category);

  useEffect(() => {
    dispatch(GetCategories());
  }, [])

  const handleDelete = async (id) => {
    try {
      await dispatch(DelCategorie(id)).unwrap();
      dispatch(GetCategories());
    }
    catch {
      console.log("err");
    }
  };

  const menu = (id) => (
    <Menu>
      <Menu.Item key="1">
        <a href="#" className="text-blue-400">
          Modify
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <Popconfirm
          title={'Delete Category'}
          description={'Are you sure to delete this Category'}
          okText={'Delete'}
          cancelText={'Cancel'}
          onConfirm={() => handleDelete(id)}
        >
          <a href="#" className="text-red-500">
            Delete
          </a>
        </Popconfirm>
      </Menu.Item>
    </Menu >
  );

  return (
    <div className='flex gap-5 flex-wrap p-5 rounded-md mt-4 bg-white items-center'>
      {CategoryObj.data.length > 0 ? (
        CategoryObj.data.map((ele) => (
          <Card
            key={ele._id}
            title={ele.title}
            extra={
              <Dropdown overlay={menu(ele._id)} placement="bottomLeft">
                <a href="#">...</a>
              </Dropdown>
            }
            style={{
              width: 240,
              marginBottom: '20px',
              outline: '2px dashed gray',
            }}
          >
            <div className="flex justify-around items-center ">
              <p>{ele.name}</p>
              <div
                dangerouslySetInnerHTML={{ __html: ModifySVG(ele.svg, Width) }}
                className=''
              />
            </div>
          </Card>
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default CardCat;
