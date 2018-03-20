import React, {Component} from 'react';
import Trainer from './Trainer.js';
import '../../../html/style.css'
import Select from '../../Select/Select.js'

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
            <Select placeholder='Choose option'>
                <Select.Option>asdasd</Select.Option>
                <Select.Option>asda</Select.Option>
                <Select.Option>asda</Select.Option>
                <Select.Option>asdaasdasdasd</Select.Option>
                <Select.Option>asdaasdafegnytrgsd</Select.Option>
            </Select>
            </div>
        )
    }
}

export default Trainers;