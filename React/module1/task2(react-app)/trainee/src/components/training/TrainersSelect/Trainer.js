import React from 'react';

const Trainer = (props) => {
    return (
        <select name="Trainers" id="Trainers" onChange={props.select}>
            {props.trainers.map((item, index)=>{
                return <option key={index} value={item}>{item}</option>
            })}
        </select>
    )
};

export default Trainer;