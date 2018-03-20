import React, {Component} from 'react';
import Tasks from './Tasks.js';
import Timer from '../../Timer.js'
import '../../../html/style.css'

class Training extends Component {
    state = {
        tasks: [
            {
                name: 'Task1',
                checked: false
            },{
                name: 'Task2',
                checked: false
            },{
                name: 'Task3',
                checked: false
            },{
                name: 'Task4',
                checked: false
            },
        ],
        trainingEnd: false,
        dateInit: new Date(),
        dateStop: '',
        timerStop: false,
    };
    toggleCheck = (index, e) => {
        if (this.state.trainingEnd !== true) {
            this.setState((prevState) => {
                prevState.tasks[index].checked = !this.state.tasks[index].checked;
                return prevState;
            });
        } else {
            return false
        }
    };
    dateStop = () => {
        let dateInit = this.state.dateInit;
        let dateNow = new Date();
        this.setState({
            dateStop: {
                minutes: dateNow.getMinutes() - dateInit.getMinutes(),
                seconds: dateNow.getSeconds() - dateInit.getSeconds(),
            },
            trainingEnd: true,
            timerStop: true});
    };
    render () {
        return (
            <div>
                {this.state.tasks.map((task,index) => {
                    return <Tasks key={index} value={task.name} checked={task.checked} disabled={this.state.trainingEnd} toggleCheck={this.toggleCheck.bind(this,index)} />
                })}
                <div>
                    <h2>Тренировка длиться</h2>
                    <Timer stopTimer={this.state.timerStop} />
                    <button onClick={this.dateStop}>Завершить</button>
                    <span>result: -> {this.state.dateStop.minutes}:{this.state.dateStop.seconds}</span>
                </div>
            </div>
        )
    }
}
export default Training;