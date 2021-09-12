import React from 'react'; 
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  handleClick(){
    this.setState({count: this.state.count +1});
  }
  
  render() {
    return (
      <div align="center">
        <h1>
          {this.state.count}
        </h1>
        <button class="button" onClick={()=>{this.handleClick()}}>handclap</button>
      </div>
    );
  }
}

export default Counter;

  