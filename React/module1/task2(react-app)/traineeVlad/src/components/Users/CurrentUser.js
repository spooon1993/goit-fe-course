import React from 'react'
import {Icon} from '../ui'
import styled from 'styled-components'
import {UserContainer, NameContainer, NameUser, NameContain, NameTrainer} from './'

import {usersListArr} from './';
import Exercise from "../training/Exercise";

const ExercisesContainer = styled.div`
  
`;
const Day = styled.span``;
const ExerciseList = styled.div``;
const Exercises = styled.div``;
const ExerciseName = styled.span``;
const ExerciseDescription = styled.span``;



let user1 = usersListArr[1];


console.log(usersListArr);
const CurrentUser = (props) => {
    console.log(props);
    let user = usersListArr.filter( (user) => {
        return user.id === +props.match.params.id
    } );
    console.log(user);
    return(
        <div>
            <p>user id: {props.match.params.id}</p>

            {user.map( (user) => {
                return (
                    <div className='UserHead' key={user.id}>
                        <UserContainer key='1'>
                            <Icon src={user.photo} />
                            <NameContain>
                                <NameUser>
                                    <h3>{user.name}</h3>
                                    <h3>{user.surname}</h3>
                                </NameUser>
                                <NameTrainer>{user.trainer}</NameTrainer>
                                <span>{user.age}</span>
                            </NameContain>
                        </UserContainer>
                        <ExercisesContainer>

                        </ExercisesContainer>
                    </div>
                )
            } )}


            <div className='UserHead'>
                <UserContainer key='1'>
                    <Icon src={user1.photo} />
                    <NameContain>
                        <NameUser>
                            <h3>{user1.name}</h3>
                            <h3>{user1.surname}</h3>
                        </NameUser>
                        <NameTrainer>{user1.trainer}</NameTrainer>
                        <span>{user1.age}</span>
                    </NameContain>
                </UserContainer>
                <ExercisesContainer>
                    <Day>Day</Day>
                    <ExerciseList className='allExercises'>
                        <Exercises className='exercise'>
                            <ExerciseName>Name</ExerciseName>
                            <ExerciseDescription>Description</ExerciseDescription>
                            <Icon />
                        </Exercises>
                    </ExerciseList>
                </ExercisesContainer>
            </div>

        </div>
    )
}

export default CurrentUser;