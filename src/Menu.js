import { useState } from 'react';
import {Link} from'react-router-dom';

const MenuLink =(props)=>{
    return(
        <div style={{fontSize: "1em", textAlign:"center"}}>
            <Link to={props.to}>{props.text}</Link>
        </div>
    )
}

const ExpandMenuLink =()=>{
    const [state, setState] = useState(false);
    return(
        <div>
            <button onClick={()=>setState(!state)}>+</button>
            {
                state?
                <div>
                    Hello
                </div>
                :
                <>
                </>
            }
        </div>
    )
}

export default function Menu(){
    return(
        <div>
            <MenuLink to="/home" text="Home" />
            <MenuLink to="/about" text="About" />
            <MenuLink to="/counter" text="Counter" />
            <MenuLink to="/picture" text="Picture" />
            <ExpandMenuLink />
        </div>
    )
}

