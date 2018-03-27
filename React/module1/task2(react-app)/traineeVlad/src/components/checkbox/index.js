import React, {Component} from 'react';
import {connect} from 'react-redux';


const Box = (props) => {
    return (
        <div className='Checkbox'>
            <input  type='checkbox' checked={props.checked} onClick={props.toogleHandler} />
            <span>{props.name}</span>
            <span>X</span>
            <span>{props.id}</span>
        </div>
    )
}

class CheckboxList extends Component {

    render(){
        console.log('props',this.props.checkboxList);
        return (
            <div>
                <div className='containerCheckbox'>
                    {this.props.checkboxList.map((check) => {
                        return <Box key={1}
                                    name={check.name}
                                    checked={check.checked}
                        toogleHandler={this.props.toggleCheck.bind(this, check.id)}/>
                    })}
                </div>
                <input type='text'/>
                <button onClick={this.props.addNewCheckbox}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        checkboxList: state.checkboxList
    }

}

const dispatchToProps = (dispatch) => {
    return {
        addNewCheckbox(){
            dispatch({
                type: 'ADD_NEW_CHECKBOX',
            })
        },
        toggleCheck(id){
            dispatch({
                type: 'TOGGLE',
                id
            })
        }
    }
}

export default connect(mapStateToProps, dispatchToProps)(CheckboxList);