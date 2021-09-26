import { Telegram } from '@material-ui/icons';
import React, { Component, useState, useRef, useEffect} from 'react';
import {Link} from'react-router-dom';

function Todo(){

const [items, setItems] = useState([{tag: 'a', memo: 'cat1'}, {tag: 'b', memo: 'cat2'}]);
const handleAdd = (tag, memo) =>{
  setItems([...items, {tag, memo}])
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


// const PageNumber=(prop)=>{
//   const [number,setNumber] = useState(1);
//   if(prop.num%10==0){
//     return setNumber({number: +1});
//   }else{
//     ;
//   }
// }

// const Pagenation =(props)=>{
//   return(
//       <div >
//           <p> <Link to={props.prev}>prev</Link> </p>
//           <p> <Link to={props.next}>next</Link> </p>
//       </div>
//   )
// }


function TodoItem({item}){
  return(
    <div>
      <p>
        {item.tag} :
        {item.memo}
      </p>
       
    </div>
  );
}




function Input({onAdd}){
  
  const [page, setPage] = useState(1);
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