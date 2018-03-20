import React from 'react';
import PropTypes from 'prop-types';

const CardExercise = (props) => {
    return (
        <div>
            <img src={props.image}
                 alt={props.children}
                 className='crossfit__image'/>
            {props.children}
        </div>
    )
};
CardExercise.PropTypes = {
    image: PropTypes.string,
};
export default CardExercise;