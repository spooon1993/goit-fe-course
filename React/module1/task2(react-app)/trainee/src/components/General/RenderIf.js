import React from 'react';

const RenderIf = (props) => {
    if (props.confirm || props.condition) {
        return props.children
    } else {
        return null
    }
};

export default RenderIf;