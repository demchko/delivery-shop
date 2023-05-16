import React, { useState } from 'react';
import {Box} from '@chakra-ui/react';
import Menu from './Menu';
import { Route, Routes } from 'react-router';
import CardComponent from './CardComponent';
import sushi1 from '../image/sushi/sushi1.jpg';
import sushi2 from '../image/sushi/sushi2.jpg';
import sushi3 from '../image/sushi/sushi3.jpg';

import burger1 from '../image/burger/burger1.jpg';
import burger2 from '../image/burger/burger2.jpg';
import burger3 from '../image/burger/burger3.jpg';
import burger4 from '../image/burger/burger4.jpg';

import ItemPage from '../pages/ItemPage';
import BasketPage from '../pages/BasketPage';

const Main = () => {

  const [data] = useState([
    [
      {id: 1, title: 'Сет люксичний', descr: 'Каліфорнійські з креветкою - 1 шт, Банзай зі смаженим лососем - 1 шт, Канада - 1 шт', price: 774, gr: 890, img: sushi1},
      {id: 2, title: 'Сет філадельфія', descr: 'Філадельфія з лососем - 1 шт, Філадельфія з вугрем - 1 шт, Філадельфія з тунцем - 1 шт, Філадельфія з креветкою - 1 шт.', price: 1104, gr: 1165, img: sushi2},
      {id: 3, title: 'Сет популярний', descr: 'Філадельфія з лососем - 1 шт, Філадельфія з вугрем - 1 шт, Філадельфія з тунцем - 1 шт, Філадельфія з креветкою - 1 шт.', price: 888, gr: 1025, img: sushi3},
    ],
    [
      {id: 100, title: 'Біг Батько', descr: 'булка, соус Бургер, яловича котлета, цибуля карамелізована, бекон смажений, куряче яйце, огірок квашений, помідор, рукола', price: 235, gr: 370, img: burger1},
      {id: 101, title: 'Нормальний', descr: 'булка, соус Бургер, яловича котлета, цибуля червона, бекон смажений, огірок квашений, помідор, рукола', price: 225, gr: 310, img: burger2},
      {id: 102, title: 'Сирний', descr: "булка, соус Фірмовий, яловича котлета, сир Чедер, цибуля карамелізована, помідор, рукола, в'ялені томати", price: 222, gr: 300, img: burger3},
      {id: 103, title: 'Дуже сирний', descr: "булка, соус Сирний, яловича котлета, сир Чедер, сир Камамбер, помідор, рукола", price: 295, gr: 400, img: burger4},
    ],
  ])


    return (
        <Box bg='#edf2f2' w='83%' p='10px' >
          <Routes>
            <Route path='' element={<Menu />} />
            <Route path='/sushi' element={<CardComponent data={data[0]} />} />
            <Route path='/burger' element={<CardComponent data={data[1]} />} />
            <Route path='/product/:id' element={<ItemPage data={data} />} />
            <Route path='/basket' element={<BasketPage />} />
          </Routes>
        </Box>
    );
};

export default Main;