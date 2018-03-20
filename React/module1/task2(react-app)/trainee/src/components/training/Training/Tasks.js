import React, {Component} from 'react';

// class Tasks extends Component {
//     state = {
//         addClass: false,
//         isAddTime: [],
//     };
//     toggleClass = (e) => {
//         let currentID = e.target.id;
//         let currentState = this.state.addClass;
//         this.setState( { addClass: !currentState } );
//         if ( !this.state.isAddTime.includes(currentID) ) {
//             this.setState( (prevState) => {
//                 prevState.isAddTime.push(currentID);
//                 return prevState;
//             } );
//             this.props.addTime();
//         }
//     };
//     render () {
//         let classes = ['label-text'];
//         if(this.state.addClass){
//             classes.push('done')
//         }
//         return (
//             <div className="checkbox">
//                 <label className={classes.join(' ')} htmlFor={this.props.id} ><input onClick={this.toggleClass} id={this.props.id} type="checkbox" className='label-check' />{this.props.name}</label>
//             </div>
//         )
//     }
// }





const Tasks = (props) => {
    return (
        <div className="checkbox" onClick={props.toggleCheck}>
            <input
            id=''
            type="checkbox"
            className='label-check'
            checked={props.checked}
            disabled={props.disabled} />
            <label
                className={`label-text ${props.checked ? 'done' : ''}`}
                htmlFor=''>
                {props.value}
            </label>
         </div>
    )
};
export default Tasks;