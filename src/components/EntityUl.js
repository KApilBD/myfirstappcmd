import React from 'react';

import './EntityUl.css';

const EntityUl = (props) => {
    const list = [];

    // console.log(props.entity)

    for(let ent in props.entity){
        // console.log(ent)
        list.push(<li key={ent} className= "Llist"><a href="#home">{props.entity[ent]}</a></li>)
    }

    return (
        <div>
            <ul className= "Ulist">
                <li className= "Llist"><a href="#home">HOME</a></li>
                {list}
            </ul>
        </div>
    )
}

export default EntityUl;