import React, {Component} from 'react'
import {Button} from "../ui";
import BoxExercise from "./BoxEsercise";


class CreateTraining extends Component {
    state = {
        exercisesName: ['exe1', 'exe2', 'exe3', 'exe4', 'exe5'],
        exercisesNumber: [1],
    }

    addAnExercise = () => {
        this.setState( (prevState) => {
            let number = prevState.exercisesNumber[prevState.exercisesNumber.length - 1]
            prevState.exercisesNumber.push(number + 1);
            return {
                exercisesNumber: prevState.exercisesNumber
            }
        } )
    }


    render(){
        return(
            <div>
                {this.state.exercisesNumber.map ( (exe, index) => {
                    return (
                        <BoxExercise arr={this.state.exercisesName} num={exe} key={index}/>
                    )
                } )}

                Countdown<input type='time'/>
                <Button onClick={this.addAnExercise}>Add training</Button>

            </div>
        )
    }
}

export default CreateTraining;