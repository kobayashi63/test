import React, {state, setState, useState } from 'react';
import {Link} from'react-router-dom';

// class Push extends React.Component{
//     constructor(props) {
//       super(props); 
//       this.state = {isOn: false};//{name:'+', isOn: true };
      
//     }
//     // ...
//     handleClick(){
//         this.setState({isOn: !state});
//       }

//    render(){
//        return(
//         <div>
//         <button onClick={()=>this.handleClick({isOn: !state})}>+</button>
//         {
//             state?
//             <div>
//                 Hello
//             </div>
//             :
//             <>
            
//             </>
//         }
//     </div>
//        );
//    }   
//   }


const Push2 =()=>{
    const [state, setState] = useState(false);
    return(
        <div>
            {
                state?
                <div>
                    <div>
                        <button onClick={()=>setState(!state)}>-</button>
                    </div>    
                    Hello
                </div>
                :
                <>
                  <button onClick={()=>setState(!state)}>+</button>
                </>
            }
        </div>
    )
}



const MenuLink =(props)=>{
    return(
        <div style={{fontSize: "1em", textAlign:"center"}}>
            <Link to={props.to}>{props.text}</Link>
        </div>
    )
}



// const ExpandMenuLink =()=>{
//        const [state, setState] = useState(false);
//     return(
//         <div>
//             <button onClick={()=>setState(!state)}>+</button>
//             {
//                 state?
//                 <div>
//                     Hello
//                 </div>
//                 :
//                 <>
                 
//                 </>
//             }
//         </div>
//     )
// }

export default function Menu(){
    return(
        <div>
            <MenuLink to="/home" text="Home" />
            <MenuLink to="/about" text="About" />
            <MenuLink to="/counter" text="Counter" />
            <MenuLink to="/picture" text="Picture" />
            <MenuLink to="/bbs" text="BBS" />
            <Push2 />
        </div>
    )
}
