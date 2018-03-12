import React, {Component} from 'react';

class Tasks extends Component {
    state = {
        addClass: false,
        isAddTime: [],
    };
    toggleClass = (e) => {
        let currentID = e.target.id;
        let currentState = this.state.addClass;
        this.setState( { addClass: !currentState } );
        if ( !this.state.isAddTime.includes(currentID) ) {
            this.setState( (prevState) => {
                prevState.isAddTime.push(currentID);
                return prevState;
            } );
            this.props.addTime();
        }
    };
    render () {
        let classes = ['label-text'];
        if(this.state.addClass){
            classes.push('done')
        }
        return (
            <div className="checkbox">
                <label className={classes.join(' ')} htmlFor={this.props.id} ><input onClick={this.toggleClass} id={this.props.id} type="checkbox" className='label-check' />{this.props.name}</label>
            </div>
        )
    }
}







// const Tasks = (props) => {
//     return (
        {/*<div className="checkbox">*/}
            // {props.taskList.map((item, index) => {
            //     return <label style={props.styles} key={index} className='label-text' htmlFor={item}  onClick={props.toggle}><input id={item} type="checkbox" className='label-check' />{item}</label>
            // })}
        // </div>
    // )
// };
export default Tasks;