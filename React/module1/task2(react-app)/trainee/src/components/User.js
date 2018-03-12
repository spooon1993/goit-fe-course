import React from 'react';

const User = (props) => {
    return (
        <div className='user'>
            <h2 className='user__name'>Name: {props.name}</h2>
            <span className='user__age'>age: {props.age}</span>
            <span className='user__id'>ID: {props.id}</span>
            <button onClick={props.clickRemove}>remove user</button>
        </div>
    )
};
export default User;