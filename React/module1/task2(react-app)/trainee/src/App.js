import React, { Component } from 'react';
import './App.css';
import TrainderSelect from './components/training/TrainersSelect/TrainersSelectPage.js'
import Training from './components/training/Training/TrainingPage.js'
import CrossFit from '../src/components/CrossFit'

class App extends Component {
    render() {
        return (
            <div className="App">
                <CrossFit/>
                <span>================</span>
                <Training/>
                <span>================</span>
                <TrainderSelect/>
                {/*<UserList/>*/}
                {/*<span>===============</span>*/}
                {/*<News />*/}
            </div>
        );
    }
}

export default App;
