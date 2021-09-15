import { emphasize } from '@material-ui/core';
import React, { Component } from 'react';
import './BBS.css';
import styled from 'styled-components';

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
                    <p><input type="text" name="user" onChange={this.handleChange} value={this.state.user}/></p>
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
                        <div key={l.user} style={{marginTop: 10}}>
                            <div style={{display: 'flex'}}>
                               <div class="font-size: 5px"> {/* ? hanei sarenai */}
                                  {this.state.date}: 
                               </div>
                               <div class="name-box">
                                   {l.user}
                               </div>
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