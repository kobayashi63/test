import { Telegram } from '@material-ui/icons';
import React, { Component, useState, useRef, useEffect} from 'react';

function Todo(){

const [items, setItems] = useState([{tag: 'a', memo: 'cat1'}, {tag: 'b', memo: 'cat2'}]);

const handleAdd = (tag, memo) =>{
  setItems([...items, {tag, memo}]);
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
    {item.tag}  
    {item.memo}
    </p>
  );
}


function Input({onAdd}){
  
  const [memo, setMemo] = useState('');
  const [tag, setTag] = useState('');

  const handleChangeT= e => setTag(e.target.value);
  const handleChangeM= e => setMemo(e.target.value);

  const handleClick = e => {
    e.preventDefault();
    onAdd(tag, memo);
    setTag('');
    setMemo('');   
  }
  
  return(
    <div>
      <input value={tag} onChange={handleChangeT} placeholder="tag"/>
      <input value={memo} onChange={handleChangeM} placeholder="memo"/>
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