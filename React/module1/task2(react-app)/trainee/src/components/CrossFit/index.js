import React, {Component} from 'react';
import RangeSlider from './RangeSlider.js';
import WorkoutProcess from './WorkoutProcess.js';
import RenderIf from '../General/RenderIf';
import Button from '../General/Button.js';
import Timer from '../Timer.js'
import CardExercise from './CardExercise.js';
import './index.css'


const exerciseList = [
    {
        image: 'https://muslimmatters.org/wp-content/uploads/full_6466152-680x453.jpg',
        description: 'Bla Bla text',
    }, {
        image: 'https://muslimmatters.org/wp-content/uploads/full_6466152-680x453.jpg',
        description: 'Bla Bla text',
    }, {
        image: 'https://muslimmatters.org/wp-content/uploads/full_6466152-680x453.jpg',
        description: 'Bla Bla text',
    }, {
        image: 'https://muslimmatters.org/wp-content/uploads/full_6466152-680x453.jpg',
        description: 'Bla Bla text',
    },
];
export default class CrossFit extends Component {
    state = {
        time: 22,
        ccal: 0,
        inProcess: false,
        card: '',
    };
    startProcess = () => {
        this.setState({
            inProcess: true,
        })
    };
    changeExercise = (minutes, seconds) => {
        let oneExTime = this.state.time / exerciseList.length;

    };

    render() {
        let minutes = Math.floor(this.state.time / 60);
        let seconds = Math.floor(this.state.time / 60)%60;

        return (
            <div>Hello!
                <RenderIf condition={this.state.inProcess}>
                    <WorkoutProcess/>
                    <Timer minutes={minutes}
                           seconds={seconds}
                           onTimerChange={this.changeExercise} />
                    <CardExercise image={this.state.card.image}>
                        {this.state.card.description}
                    </CardExercise>
                </RenderIf>
                <RenderIf condition={!this.state.inProcess}>
                    <RangeSlider max={500}/>
                    <Button className='btn-start' onClick={this.startProcess}>
                        <b>Start</b>
                    </Button>
                </RenderIf>
            </div>

        )
    }
}