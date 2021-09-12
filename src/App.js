
import './App.css';
import Toppage from './Component/Toppage';
import { Link, Switch, Route} from 'react-router-dom';
import Router from './Router';

const MainContents=()=>{
    return(
        <div class="page" align="right">
        <Router></Router>

        <div class="menu" aligm="left">
            <Link to="/home" class="link-box">Home</Link>  <br />
            <Link to="/about" class="link-box">About</Link>  <br />
            <Link to="/counter" class="link-box">Counter</Link> <br />
            <Link to="/picture" class="link-box">Picture</Link> 
        </div>
    </div>
    )
}
export default function App(){
    return (
        
    <Switch>
        <Route exact path="/" component={Toppage} />
        <Route path="/*" component={MainContents}/>   
        
       
    </Switch>

  );
}