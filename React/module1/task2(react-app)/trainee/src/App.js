import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import News from './components/News.js'
import UserList from './components/UserList.js'
import TrainderSelect from './components/TrainersSelect.js'
import Trainer from './components/Trainer.js'
import Training from './components/Training.js'
class App extends Component {
    render() {
        return (
            <div className="App">
                <Training/>
                <TrainderSelect/>
                {/*<UserList/>*/}
                {/*<span>===============</span>*/}
                {/*<News />*/}
            </div>
        );
    }
}

export default App;
