import { emphasize } from '@material-ui/core';
import React, { Component } from 'react';
import './BBS.css';

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
                    <p>Name
                    <input type="text" name="user" onChange={this.handleChange} value={this.state.user} />
                    </p>
                    <p>Comments
                    <p>
                    <textarea type="text" name="comments" style={{width: 200,height: 60}} onChange={this.handleChange} value={this.state.comments} />
                    </p>
                    </p>
                    <button onClick={this.handleSubmit}>Send</button>
                    {this.state.notation1}
                    {this.state.notation2}

                    {this.state.lists.map((l)=>(
                        <div key={l.user}>
                            <div>
                                <p class="name-box">
                               {l.user}:
                               </p>
                               <p style={{fontSize: 10}}>
                                   {this.state.date}
                               </p>
                            </div>
                            <div class="comment-box">
                               {l.comments}
                            </div>
                        </div>
                    ))}
            </div>
        );
    }

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
            user:"",
            comments: ""
        });
    }
})()}

    }
}



export default BBS;