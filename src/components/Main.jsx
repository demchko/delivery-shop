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

import pizza1 from '../image/pizza/pizza1.jpg';
import pizza2 from '../image/pizza/pizza2.jpg';
import pizza3 from '../image/pizza/pizza3.jpg';
import pizza4 from '../image/pizza/pizza4.jpg';

import drink1 from '../image/drinks/drink1.jpg';
import drink2 from '../image/drinks/drink2.png';
import drink3 from '../image/drinks/drink3.png';
import drink4 from '../image/drinks/drink4.jpg';

import salad1 from '../image/salad/salad1.jpg';
import salad2 from '../image/salad/salad2.jpg';

import desert1 from '../image/desert/desert1.jpg';

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
    [
      {id: 200, title: 'Квадрік', descr: 'соус бешамель, пармезан, сир моцарела, сир рікота, сир дорблю, волоський горіх, груша.', price: 292, gr: 410, img: pizza1},
      {id: 201, title: 'Формаджіпесто', descr: 'соус бешамель, сир моцарела, сир пармезан, сир камамбер, соус песто.', price: 259, gr: 400, img: pizza2},
      {id: 202, title: 'Італіана', descr: 'соус бешамель, сир моцарела, курка, печериці, помідори чері, соус песто.', price: 255, gr: 480, img: pizza3},
      {id: 203, title: 'Анджеліна', descr: 'соус кисло-солодкий, сир моцарела, курка, цибуля, баварські ковбаски, корнішон.', price: 261, gr: 460, img: pizza4},
    ],
    [
      {id: 300, title: 'Капрезе', descr: 'Перець болгарський печений, сир Моцарела, соус песто, рукола, перець чорний, помідор, цибуля синя, олія соняшникова, лимон', price: 225, gr: 280, img: salad1},
      {id: 301, title: "Рів'єра", descr: 'Креветка смажена, салат айсберг, авокадо, помідор, цибуля синя, огірок, соус, лимон', price: 275, gr: 235, img: salad2},
    ],
    [
      {id: 400, title: 'Coca Cola — 0,5 л', descr: '', price: 44, img: drink1},
      {id: 401, title: 'Fanta — 0,5 л', descr: '', price: 44, img: drink2},
      {id: 400, title: 'Sprite — 0,5 л', descr: '', price: 44, img: drink3},
      {id: 400, title: 'Сік яблучно-вишневий ТМ “Galicia”, 1 л', descr: '', price: 44, img: drink4},
    ],
    [
      {id: 501, title: 'Сирники', descr: 'сирники, карамельний соус, сметана', price: 114, gr: 240, img: desert1},
    ],
  ])


    return (
      <Box bg='#edf2f2' w='100%' maxW={{ base: '100%', md: '83%' }} p='10px'>
  <Routes>
    <Route path='' element={<Menu />} />
    <Route path='/sushi' element={<CardComponent data={data[0]} />} />
    <Route path='/burger' element={<CardComponent data={data[1]} />} />
    <Route path='/pizza' element={<CardComponent data={data[2]} />} />
    <Route path='/salad' element={<CardComponent data={data[3]} />} />
    <Route path='/drinks' element={<CardComponent data={data[4]} />} />
    <Route path='/deserts' element={<CardComponent data={data[5]} />} />
    <Route path='/product/:id' element={<ItemPage data={data} />} />
    <Route path='/basket' element={<BasketPage />} />
  </Routes>
</Box>
    )
};

export default Main;