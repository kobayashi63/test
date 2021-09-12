import Home from './Component/Home';
import About from './Component/About';
import Counter from './Component/Counter';
import Toppage from './Component/Toppage';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

export default function App(){
    return (
        
    <div class="page" align="right">
        <Switch>
            <Route exact path="/" component={Toppage}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={About} />
            <Route exact path="/counter" component={Counter} />
        </Switch>

        <div class="menu" aligm="left">
            <Link to="/home" class="link-box">Home</Link>  <br />
            <Link to="/about" class="link-box">About</Link>  <br />
            <Link to="/counter" class="link-box">Counter</Link> 

        </div>
    </div>

  );
}