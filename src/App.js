
import './App.css';
import Toppage from './Component/Toppage';
import {Switch, Route} from 'react-router-dom';
import Router from './Router';
import Menu from './Menu';

const MainContents=()=>{
    return(
    <>
        <div class="page" align="right">
            <Router/>
        </div>
        <div class="menu" aligm="left">
            <Menu />
        </div>
    </>
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