import React from 'react';
const lessonNum = 17;
const ItemList = () => (
  <ul>
    <li>Работа</li>
    <li>Учеба</li>
  </ul>
);
const App = () => (<div>
  <h1>
    Hi!
  </h1>
  <h2>
    <b>{lessonNum}</b> урок
  </h2>
  <ItemList />
</div>);

export default App;