import { Switch, Route } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Counter from './Component/Counter';
import Toppage from './Component/Toppage';
import Picture from './Component/Picture';
import BBS from './Component/BBS';
import TestPage from './Component/TestPage';

export default function Router(){
    return(
        <div class="page" align="right">
            <Switch >
                <Route exact path="/top" component={Toppage}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/about" component={About} />
                <Route exact path="/counter" component={Counter} />
                <Route exact path="/picture" component={Picture} />
                <Route exact path="/bbs" component={BBS} />
                <Route exact path="/testpage" component={TestPage} />
            </Switch>
        </div>
    )
}