import React from 'react'
import {Button, Icon} from '../ui'
import styled from 'styled-components'
import {UserContainer, NameContainer, NameUser, NameContain, NameTrainer} from './'
import {Link} from 'react-router-dom'
import {usersListArr} from './';
import Exercise from "../training/Exercise";

import {StyledLink} from './'

const ExercisesContainer = styled(UserContainer)`
  background-color: #eeeeee;
  height: 100%;
`;
const Exercises = styled(UserContainer)``;
const Day = styled.span``;
const ExerciseList = styled.div``;
const ExerciseName = styled.span``;
const ExerciseDescription = styled.span``;




console.log(usersListArr);
const CurrentUser = (props) => {
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
                            <ExerciseList className='ExercisesList'>
                                {user.trainExercises.map( (ex, index) => {
                                    return (
                                        <Exercises className='exercise' key={index}>
                                            <Day>{ex.day}</Day>
                                            <ExerciseName>{ex.exercises[0].name}</ExerciseName>
                                            <ExerciseDescription>{ex.exercises[0].description}</ExerciseDescription>
                                            <Icon src={ex.exercises[0].img} />
                                        </Exercises>
                                    )
                                } )}

                            </ExerciseList>
                        </ExercisesContainer>
                    </div>
                )
            } )}
            <StyledLink to={`/users/${props.match.params.id}/create/`}>
                <Button>Add training</Button>
            </StyledLink>

        </div>
    )
}

export default CurrentUser;