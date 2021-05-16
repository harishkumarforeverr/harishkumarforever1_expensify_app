import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>{
    return (
        <div>
            <h1>im a info component</h1>
            <h3>i have these props :  {props.info}</h3>
        </div>
    );
} 
  
const requireAuthentication=(WrapperComponent)=>{
    return (props)=>{ 
        return (
            <div>    
            {
                props.isAuth ? 
                ( 
                    <div> 
                        <h1> please dont share these info with anyone </h1>
                        <WrapperComponent {...props} />
                    </div>
                )
                :
                (
                  <h1> please provide your Authentication  </h1>
                )
            }
            </div>
        )
    }
}

const Admin=requireAuthentication(Info);
ReactDOM.render( <Admin isAuth={false} info="these are some INFO props" />, document.getElementById("app"));
 