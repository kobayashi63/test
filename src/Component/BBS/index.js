import React, { Component } from 'react';
import './BBS.css';

class BBS extends Component {

    constructor(props){
        super(props);
        this.state = {
            lists:[],
            user: "",
            comments: "",
            notation: ""
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
                    {this.state.notation}
                    
                    {this.state.lists.map((l)=>(
                        <div key={l.user}>
                            <div class="name-box">
                               {l.user}:
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
                    notation: "!Please write your name!"
                });
        
            } else {
            
        this.setState({
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