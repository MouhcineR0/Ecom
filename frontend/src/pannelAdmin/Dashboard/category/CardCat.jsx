import React, { useState } from 'react';
import { Card, Dropdown, Menu } from 'antd';

const cardData = [
  { id: 1, title: 'Card 1', content: 'Content for card 1' },
  { id: 2, title: 'Card 2', content: 'Content for card 2' },
  { id: 3, title: 'Card 3', content: 'Content for card 3' },
  { id: 4, title: 'Card 4', content: 'Content for card 4' },
  { id: 5, title: 'Card 5', content: 'Content for card 5' },
];

const CardCat = () => {
  const [cards, setCards] = useState(cardData);

  const handleDelete = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const menu = (id) => (
    <Menu>
      <Menu.Item key="1">
        <a href="#" className="text-blue-400">
          Modifier
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#" className="text-red-500" onClick={() => handleDelete(id)}>
          Supprimer
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='flex gap-5 flex-wrap p-5 rounded-md mt-4 bg-white '>
      {cards.map((ele) => (
        <Card
          key={ele.id}
          title={ele.title}
          extra={
            <Dropdown overlay={menu(ele.id)} placement="bottomLeft">
              <a href="#">...</a>
            </Dropdown>
          }
          style={{
            width: 300,
            marginBottom: '20px', 
            outline: '2px dashed gray',
          }}
        >
          <p>{ele.content}</p>
        </Card>
      ))}
    </div>
  );
}

export default CardCat;
