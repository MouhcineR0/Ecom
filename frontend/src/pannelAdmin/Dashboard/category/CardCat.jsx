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
    <div className='single-categorie grid grid-cols-3 md:grid-cols-6 gap-8'>
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
              // width: 240,
              // marginBottom: '20px',
              // outline: '2px dashed gray',
            }}
          >
            <div className="rounded-md border border-gray-400 py-5 flex items-center justify-center  hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
              <div className='flex flex-col gap-4 items-center'>
                <div
                  dangerouslySetInnerHTML={{ __html: ModifySVG(ele.svg, Width) }}
                  className=''
                />
                <h1 className='md:text-sm text-[12px]'>{ele.name}</h1>
              </div>
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
