import React, {Component} from 'react';
import Trainer from './Trainer.js';
import '../html/style.css'

class Trainers extends Component {
    state = {
        trainerSelect: 'Крутой',
        trainers: ['Крутой', 'Добрый', 'Злой', 'Дешевый'],
    };
    selectTrainer = (e) => {
        this.setState({trainerSelect: e.target.value});
    };
    addTrainer = () => {
        console.log(`Выбран ${this.state.trainerSelect} тренер`);
    };
    render() {
        return(
            <div className="wrapper">
                <div className="header">
                    <i className="fas fa-bars">icon</i>
                </div>
                <div className="content">
                    <Trainer trainers={this.state.trainers} select={this.selectTrainer} />
                    <button onClick={this.addTrainer}>Добавить</button>
                </div>
            </div>
        )
    }
}

export default Trainers;