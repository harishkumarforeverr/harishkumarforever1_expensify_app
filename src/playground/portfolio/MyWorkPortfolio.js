import React from 'react';
const MyWorkPortfolio = (props) => { 
    console.log(props);
    return (
        <div>
            <h1>your watching my portofilo no : {props.match.params.id}</h1>
        </div>
    );
}
export default MyWorkPortfolio;