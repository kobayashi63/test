
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
// const textContents = document.querySelector(".comment-box");
    // const textHeight = textContents.clientHeight;
    // let element = window.getComputedStyle(textContents);
    // let lineHeight = element.getPropertyValue('line-height');
    // lineHeight = lineHeight.replace(/[^-/d/.]/g, '');



// const Form =(props)=>{
//     return(
//             <>
//                    <p>BBS</p>
//                     <p style={{display: 'flex'}}>
//                     <p class="Subject ">Name</p>
//                     <p><input type="text" name={props.nameInput} maxlength="10" placeholder="10文字以内" onChange={props.Change} value={props.value-user}/></p>
//                     </p>
//                     <p class="Subject" style={{marginTop: -30}}>Comments
//                     <p>
//                     <textarea type="text" name={props.nameTextarea} style={{resize: 'none', width: 200,height: 60, marginTop: -10, marginBottom: -10}} onChange={props.onChange} value={props.value-comments} />
//                     </p>
//                     </p>
//                     <button onClick={props.Click}>Send</button>
//                     {this.state.notation1}
//                     {this.state.notation2}
//             </>        
//     )
// }    


const CommentBox =(props)=>{
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






class BBS extends Component {

    constructor(props){
        super(props);
        this.state = {
            commElem: [],
            user: "",
            comments: "",
            notation1: "",
            notation2: "",
            number: 0,
            commList: []
        }
    }

    render(){
        
        return(
            <div classname="BBS" align="left">
                    {/* <Form Change={this.handleChange} Click={this.hundleSubmit} value-user={this.state.user} value-comments={this.state.comments} nameInput={"user"} nameTextarea="comments"/> */}
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

                    {this.state.commElem.map((l)=>(
                       <div class="BBS-box"> 
                         <div  style={{marginTop: 10}}>
                            <CommentBox number={l.number} user={l.user} date={this.props.date} comments={l.comments}/>
                        </div> 

                       </div> 
                    ))}
            </div>
        );
    }



    // textContents =()=> {document.querySelector('.comment-box')}

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
                    commElem: [
                      ...this.state.commElem,
                      {
                       user: this.state.user,
                       comments: this.state.comments,
                       number: this.state.number +1
                      }
                    ],
                   
                comments: "",
                number: this.state.number +1
                });
       
    
            }
    

    
    


    
})()}

    }

    
}





export default BBS;