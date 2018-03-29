import React, {Component} from 'react';
import {connect} from 'react-redux';


const Box = (props) => {
    return (
        <div className='Checkbox'>
            <input  type='checkbox' checked={props.checked} onClick={props.toogleHandler} />
            <span>{props.name}</span>
            <span onClick={props.remove}> -> X</span>
            <span>{props.id}</span>
        </div>
    )
}

class CheckboxList extends Component {

    state = {
        name: ''
    }

    changeText =(e) => {
        this.setState({
            name: e.target.value
        })
    }

    addCheckbox =() => {
        this.props.addNewCheckbox(this.state.name);
        this.setState({name: ''});
    }

    removeCheckbox =(id) => {
        this.props.deleteCheck(id)
    }

    render(){
        return (
            <div>
                <div className='containerCheckbox'>
                    {this.props.checkboxList.map((check, index) => {
                        return <Box key={index}
                                    name={check.name}
                                    checked={check.checked}
                        toogleHandler={this.props.toggleCheck.bind(this, check.id)} remove={this.removeCheckbox.bind(this, check.id)}/>
                    })}
                </div>
                <input type='text'
                       value={this.state.name}
                       onChange={this.changeText} />
                <button onClick={this.addCheckbox}>Add</button>
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
        addNewCheckbox(name){
            dispatch({
                type: 'ADD_NEW_CHECKBOX',
                name
            })
        },
        toggleCheck(id){
            dispatch({
                type: 'TOGGLE',
                id
            })
        },
        deleteCheck(id){
            dispatch({
                type: 'DELETE_CHECKBOX',
                id
            })
        }
    }
}

export default connect(mapStateToProps, dispatchToProps)(CheckboxList);