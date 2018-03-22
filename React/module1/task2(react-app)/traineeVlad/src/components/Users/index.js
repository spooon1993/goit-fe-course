import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Icon} from '../ui'
import UsernameIcon from '../../assets/icons/icon-username.svg';


export const usersListArr = [
    {
        id: 1,
        name: 'Name1',
        surname: 'Surname1',
        age: 21,
        photo: '../../assets/icons/icon-username.svg',
        trainer: 'Trainer1',
        trainExercises: [
            {
                day: 'Mon',
                exercises: [
                    {
                        name: 'exercises1',
                        description: 'some text description',
                        img: '../../assets/icons/icon-username.svg',
                    }
                ],
            }, {
                day: 'thu',
                exercises: [
                    {
                        name: 'exercises1',
                        description: 'some text description',
                        img: '../../assets/icons/icon-username.svg',
                    }
                ],
            }, {
                day: 'wed',
                exercises: [
                    {
                        name: 'exercises1',
                        description: 'some text description',
                        img: '../../assets/icons/icon-username.svg',
                    }
                ],
            }
        ],
    },
    {
        id: 2,
        name: 'Name2',
        surname: 'Surname2',
        age: 21,
        photo: '../../assets/icons/icon-username.svg',
        trainer: 'Trainer2',
        trainExercises: [
            {
                day: 'Mon',
                exercises: [
                    {
                        name: 'exercises1',
                        description: 'some text description',
                        img: '../../assets/icons/icon-username.svg',
                    }
                ],
            }
        ],
    },
    {
        id: 3,
        name: 'Name3',
        surname: 'Surname3',
        age: 21,
        photo: '../../assets/icons/icon-username.svg',
        trainer: 'Trainer3',
        trainExercises: [
            {
                day: 'Mon',
                exercises: [
                    {
                        name: 'exercises1',
                        description: 'some text description',
                        img: '../../assets/icons/icon-username.svg',
                    }
                ],
            }
        ],
    }
];

export const UserContainer = styled.div`
    background-color: #c6d255a8;
    letter-spacing: 0.04em;
    width: 100%;
    height: 60px;
    border: none;
    margin-bottom: 5px;
    max-width: 480px;
    background-color: #ffffff;
    font-family: Chivo, sans-serif;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
`;
export const NameContain = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;
export const NameUser = styled.div`
    width: 60%;
    display: flex;
`;
export const NameTrainer = styled.h4`
    display: block;
    width: 40%;
    text-align: end;
`;
export const StyledLink = styled(Link)`
    color: grey;
    text-decoration: none;
`

class UsersList extends Component {



    render(){
        return(
            <div>
                <p>UsersList Component</p>
                {usersListArr.map( (user, index) => {
                    return (
                        <StyledLink to={`/users/${user.id}`} key={index}>
                            <UserContainer key={index}>
                                <Icon src={user.photo} />
                                <NameContain>
                                    <NameUser>
                                        <h3>{user.name}</h3>
                                        <h3>{user.surname}</h3>
                                    </NameUser>
                                    <NameTrainer>{user.trainer}</NameTrainer>
                                    <span>age: {user.age}</span>
                                    <span>| id: {user.id}</span>
                                </NameContain>
                            </UserContainer>
                        </StyledLink>
                    )
                } )}

                {/*<StyledLink to='/users/2'>*/}
                    {/*<UserContainer>*/}
                        {/*<Icon src={UsernameIcon} />*/}
                        {/*<NameContain>*/}
                            {/*<NameUser>*/}
                                {/*<h3>Name 123</h3>*/}
                                {/*<h3>Surname</h3>*/}
                            {/*</NameUser>*/}
                            {/*<NameTrainer>trainer</NameTrainer>*/}
                            {/*<span>age</span>*/}
                        {/*</NameContain>*/}


                    {/*</UserContainer>*/}
                {/*</StyledLink>*/}

                <span>ID: {this.props.match.params.id}</span>
            </div>
        )
    }
}

// const UsersList = ( {match} ) => {
//     console.log(match);
//     return(
//         <div>dalsdfjsdlg   id: {match.params.id}</div>
//     )
//
// }

export default UsersList;