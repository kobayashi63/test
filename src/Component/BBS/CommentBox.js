import React, { Component, useState, useRef, useEffect} from 'react';
import './BBS.css';



const Text = (props) => {
    const elm = useRef(null);
    let textHeight 
    useEffect(() => {
      console.log(elm.current);
      console.log(JSON.stringify(elm.current.getBoundingClientRect().height));
      textHeight = JSON.stringify(elm.current.getBoundingClientRect().height);
    }, []);

    if(textHeight > 50){
        return <Hidden text={props.text} ref={elm}/>
    }else{
        return(
        <div ref={elm} class="comment-box">
        {props.text}
        </div>
        )
    };
        
}



const Hidden =(props)=>{
    const [hidden, setHidden] = useState(true);
    return(
        <div>
        {hidden?
            <div class="comment-box omit">
            {props.text}
            <a onClick={()=>setHidden(!hidden)}>read more</a>
            </div>
            :
            <div class="comment-box">
            {props.text}
            <a onClick={()=>setHidden(!hidden)}>read less</a>
            </div>
        }
        </div>
    )
}



export default function CommentBox (props){
    return(
        <div  style={{marginTop: 10}}>
                            <div style={{display: 'flex', alignItems: 'center', marginBottom: -15}}>
                                <p> {props.number} </p>
                               <h1> 
                                   {props.user} :
                               </h1>
                               <div style={{fontSize: "10px"}}> 
                                  {props.date}
                               </div>
                            </div>
                            <div>
                               <Text text={props.comments} />   
                            </div>
                        </div>
    )
}
