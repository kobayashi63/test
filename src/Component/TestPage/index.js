import React, { Component, useState, useRef, useEffect} from 'react';

function Todo(){
const [items, setItems] = useState([{text: 'cat1'}, {text: 'cat2'}]);
const handleAdd = text =>{
  setItems([...items, {text}]);
} 
return(
  <div>
    <p>
      <Input onAdd={handleAdd} />
    </p>
    {items.map(item =>(
      <p>
      <TodoItem item={item} />
      </p>
    ))}
    <p>{items.length}</p>
  </div>
)
}

function TodoItem({item}){
  return(
    <p>
    {item.text}
    </p>
  );
}


function Input({onAdd}){
  const [text,setText] = useState('');
  const handleChange = e => setText(e.target.value);
  const handleClick = e => {
    onAdd(text);
    setText('');
  }
  
  return(
    <div>
      <input value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}



export default function TestPage(){
    return (
      <div align="center">
        <Todo /> 
      </div>  
  );
}