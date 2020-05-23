import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (
  <ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'завершить урок по props'} /></li>
    <li><Item todoItem={'сходить в магазин'} /></li>
  </ul>
);

export default ItemList;