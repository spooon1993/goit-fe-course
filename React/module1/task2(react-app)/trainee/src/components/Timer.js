import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Timer extends Component {
    static propTypes = {
        minutes: PropTypes.number.isRequired,
        seconds: PropTypes.number.isRequired,
        onTimerChange: PropTypes.func,
        pause: PropTypes.bool
    }
    static defaultProps = {
        minutes: 0,
        seconds: 0,
        onTimerChange: ()=>{},
    };
    state = {
        minutes: this.props.minutes,
        seconds: this.props.seconds,
        stopTimer: this.props.stopTimer,
    };
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState((prevState) => {
                let minutes = parseInt(this.state.minutes);
                let seconds = parseInt(this.state.seconds);
                seconds++;
                if (seconds > 59){
                    seconds = 0;
                    minutes++;
                }
                return{
                    minutes,
                    seconds
                }
            });
            if (this.state.stopTimer) {
                clearInterval(this.interval);
            }
        } ,1000);
    }
    componentDidUpdate(prevProps, prevState){
        // this.props.pause
        this.props.onTimerChange(this.state.minutes, this.state.seconds);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            // minutes: nextProps.minutes,
            // seconds: nextProps.seconds,
            stopTimer: nextProps.stopTimer
        });
    };
    componentWillUnmount(){
        clearInterval(this.interval)
    };
    render(){
        let {minutes, seconds} = this.state;
        return(
            <div className='timer'>
                <span className='minutes'>{
                    (minutes < 10) ? '0' + minutes : minutes
                }</span>
                :
                <span className='seconds'>{
                    (seconds < 10) ? '0' + seconds : seconds
                }</span>
            </div>
        )
    }
}
export default Timer;