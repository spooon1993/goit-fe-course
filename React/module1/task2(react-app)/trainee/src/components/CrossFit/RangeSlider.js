import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class RangeSlider extends Component {
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    };

    static defaultProps = {
        min: 0
    };

    state = {

    };

    render() {
        return(
            <div className='range__wrapper'>
                <span className='range__min'>0</span>
                <div className='range__item'>
                    <div className='range__value'></div>
                    <div className='range__pointer'></div>
                </div>
                <span className='range__min'>500</span>
            </div>
        )
    }
}
