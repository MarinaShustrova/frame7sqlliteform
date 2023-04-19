import React, { useState } from 'react';
import { f7, Navbar, Page, BlockTitle, List, ListItem, Input, Button } from 'framework7-react';

const MyForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carNumber, setCarNumber] = useState('');

  const handleSaveClick = async () => {
    try {
      // записываем данные в базу данных
      const res = await fetch('/api/saveData', {
        method: 'POST',
        body: JSON.stringify({ name, phone, carNumber }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      console.log(data);
      f7.dialog.alert('Данные успешно сохранены!');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Page>
      <Navbar title="Моя Форма" />
      <BlockTitle>Заполните форму</BlockTitle>
      <List>
        <ListItem>
          <Input type="text" placeholder="ФИО" value={name} onInput={(e) => setName(e.target.value)} />
        </ListItem>
        <ListItem>
          <Input type="tel" placeholder="Номер телефона" value={phone} onInput={(e) => setPhone(e.target.value)} />
        </ListItem>
        <ListItem>
          <Input type="text" placeholder="Номер машины" value={carNumber} onInput={(e) => setCarNumber(e.target.value)} />
        </ListItem>
      </List>
      <Button fill round onClick={handleSaveClick}>Отправить</Button>
    </Page>
  );
};

export default MyForm;






