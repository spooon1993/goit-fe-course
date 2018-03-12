import React, {Component} from 'react';
import User from './User.js';

class UserList extends Component {
    state = {
        name: '',
        age: '',
        userList: [
            {
                name: 'Vasya',
                age: 17,
                id: '1',
            }, {
                name: 'Petya',
                age: 18,
                id: '2',
            }, {
                name: 'Vova',
                age: 19,
                id: '3',
            }, {
                name: 'Slava',
                age: 20,
                id: '4',
            },
        ],
    };
    addUser = () => {
        this.setState( (prevState) => {
            let lastID = this.state.userList[this.state.userList.length -1].id;
            prevState.userList.push({
                name: this.state.name,
                age: this.state.age,
                id: +lastID + 1,
            });
            return prevState;
        })
    };
    removeUser = (index) => {
            this.setState( (prevState) => {
            prevState.userList.splice(index, 1);
            return prevState;
        })
    };
    changeInputName = (e) => {
        let value = e.target.value;
        this.setState({
            name: value,
        });
    };
    changeInputAge = (e) => {
        let value = parseInt(e.target.value, 10);
        this.setState({
            age: isNaN(value) ? '' : value,
        });
    };
    render() {
        return(
            <div className='users'>
                <input onChange={this.changeInputName} value={this.state.name} />
                <input onChange={this.changeInputAge} value={this.state.age} />
                <button onClick={this.addUser}>Add user</button>
                {this.state.userList.map( (item, index) => {
                    return <User key={index} name={item.name} age={item.age} id={item.id} clickRemove={this.removeUser.bind(this, index)} ></User>
                } )}
            </div>
        )
    }
}
export default UserList;