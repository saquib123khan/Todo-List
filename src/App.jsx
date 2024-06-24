import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import List from './Components/List/List';

function App() {
  const [text, setText] = useState('');
  const [todoList, setTodolist] = useState([]);

  const addItem = () => {
    const newTodoItem = {
      id: uuidv4(),
      item: text,
      done: false,
    };
    setTodolist([...todoList, newTodoItem]);
    setText('');
  };

  const handleToggle = (itemId) => {
    const newTodoList = todoList.map((listItem) => {
      if (listItem.id === itemId) {
        return { ...listItem, done: !listItem.done };
      }
      return listItem;
    });
    setTodolist(newTodoList);
  };

  const handleDelete = (itemId) => {
    const newTodoItem = todoList.filter((listItem) => listItem.id !== itemId);
    setTodolist(newTodoItem);
  };

  const clearList = () => {
    setTodolist([])
  }

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div className="adder">
        <input 
          type='text' 
          placeholder='Add Items' 
          value={text} 
          onChange={(e) => setText(e.target.value)}
        />  
        <span onClick={addItem}>+</span> 
      </div>
      {todoList.length > 0 && (
        <List
          todoList={todoList}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      )}
      <button className="btn" onClick={clearList}>Clear</button>
    </div>
  );
}

export default App;