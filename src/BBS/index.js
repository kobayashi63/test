import { emphasize } from '@material-ui/core';
import React, { Component, useState, useRef, useEffect} from 'react';
import './BBS.css';

import styled from 'styled-components';
import { ReactDOM } from 'react';
import { PersonOutlineSharp, TextFormatOutlined } from '@material-ui/icons';
import { render } from '@testing-library/react';



const Text = (props) => {
    const elm = useRef(null);
     let textHeight
    useEffect(() => {
      console.log(elm.current);
      console.log(JSON.stringify(elm.current.getBoundingClientRect().height));
      textHeight = elm.current.getBoundingClientRect().height;
    }, []);
    
    if(textHeight > 50){
        return   <Hidden text={props.text} ref={elm}/>
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
// const textContents = document.querySelector(".comment-box");
    // const textHeight = textContents.clientHeight;
    // let element = window.getComputedStyle(textContents);
    // let lineHeight = element.getPropertyValue('line-height');
    // lineHeight = lineHeight.replace(/[^-/d/.]/g, '');


        
        
        
    
    




// const CommentBox =(props)=>{
//     return(
//         <div class="comment-box">
//             {props.text}   
//         </div>
//     )
// }

// 
class BBS extends Component {

    constructor(props){
        super(props);
        this.state = {
            lists:[],
            user: "",
            comments: "",
            notation1: "",
            notation2: ""
        }
    }

    render(){
        
        return(
            <div classname="BBS" align="left">
                <p>BBS</p>
                    <p style={{display: 'flex'}}>
                    <p class="Subject ">Name</p>
                    <p><input type="text" name="user" maxlength="10" placeholder="10文字以内" onChange={this.handleChange} value={this.state.user}/></p>
                    </p>
                    <p class="Subject" style={{marginTop: -30}}>Comments
                    <p>
                    <textarea type="text" name="comments" style={{resize: 'none', width: 200,height: 60, marginTop: -10, marginBottom: -10}} onChange={this.handleChange} value={this.state.comments} />
                    </p>
                    </p>
                    <button onClick={this.handleSubmit}>Send</button>
                    {this.state.notation1}
                    {this.state.notation2}

                    {this.state.lists.map((l)=>(
                       <div class="BBS-box"> 
                        <div key={l.user} style={{marginTop: 10}}>
                            <div style={{display: 'flex'}}>
                               <h1> {/*class="name-box"> */}
                                   {l.user} :
                               </h1>
                               <div style={{fontSize: "5px"}}> {/* ? hanei sarenai */}
                                  {this.state.date}
                               </div>
                            </div>
                            <div>
                               <Text text={l.comments}/>
                               
                            </div>
                        </div>
                       </div> 
                    ))}
            </div>
        );
    }



    textContents =()=> {document.querySelector('.comment-box')}

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();

    
        {(() => {
            if ( this.state.user =="" ) {
              
                this.setState({
                    notation1: "!Please write your name!"
                });
        
            } else if (this.state.comments =="") {
                this.setState({
                    notation2: "!Please write comments!"
                });
            } else

            {
        this.setState({
            date: new Date().toLocaleString(),
            lists: [
                ...this.state.lists,
                {
                    user: this.state.user,
                    comments: this.state.comments
                }
            ],
            comments: "",
            
        });
       
    
            }
    

    
    


    
})()}

    }

    
}





export default BBS;