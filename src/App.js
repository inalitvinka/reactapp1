// import './App.css';
import React from 'react';
import Todolist from './components/Todo';
import Content from './components/Content';

import CountItem  from './components/CountItem';
import Counter from './components/Counter';
import Form from './components/Form';
import Effect from './components/Effect';
import Component from './components/Component';
import Header from './components/header/Header';
import Goods from './components/goods/Goods';

// console.log(React.version);
// console.log(React);

const headerData = {
  appname: 'Hello, React!',
  logo: 'React App',
  nav: [
      {link: 'nav1', text: 'About'},
      {link: 'nav2', text: 'Info'},
      {link: 'nav3', text: 'Contacts'},
  ]
};
let todos = [
  {id: 1, completed: false, title: 'Buy bread' },
  {id: 2, completed: false, title: 'Buy butter' },
  {id: 3, completed: false, title: 'Buy milk' },
];
const goodsCard = [
  {title: 'apple', cost: '3 $', image: 'https://cdn4.iconfinder.com/data/icons/fruits-and-veggies-2/219/fruits-and-veggies-icons_apple-128.png'},
  {title: 'pear', cost: '4.50 $', image: 'https://cdn1.iconfinder.com/data/icons/random-crafticons/48/misc-_fruit_pear-128.png'},
  {title: 'melone', cost: '5.50 $', image: 'https://cdn4.iconfinder.com/data/icons/summer-time-14/64/watermelon-128.png'},
  {title: 'strawberry', cost: '2.50 $', image: 'https://cdn4.iconfinder.com/data/icons/fruits-and-veggies-2/194/fruits-and-veggies-icons_strawberry-128.png'},
];

function App() {
  

  return ( 
  <>
    < Header data ={headerData}/>
    <div className='cards'>
      {goodsCard.map((item, index) => < Goods key={index} title={item.title} cost={item.cost} img={item.image} />)}
    </div>
    <div className="wrapper">
      <h1 className='title'>React tutorial</h1>
      < Component />
      < Effect />
      < Form />
      < CountItem />
      < Counter />
      <Todolist todos={todos}/>
      <Content prop='My first react app' name='the best one'/> 
    </div>
  </> 
  );
}

export default App;
