import React, { Component } from 'react';
import {Button, TextInput, ErrorMessage} from "../ui";
import {withRouter, Link} from "react-router-dom";
import {getLogged} from "../../utils";
import styled from 'styled-components';
import UsernameIcon from '../../assets/icons/icon-username.svg'
import PasswordIcon from '../../assets/icons/icon-password.svg'


const media = {
    desktop: (styles) => {
        return `@media screen and (min-width: 1024px){
            ${styles}
        }`
    }
}

const Logo = styled.h1`
    font-size: 120px;
    text-align: right;
    line-height: 1;
    font-weight: normal;
`;

const SubLogo = styled(Logo)`
    font-size: 40px;
`;

const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-image: url("../../assets/img/bg-login.jpg");
    background-size: cover;
    color: #fff;
    padding: 20px 45px;
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    ${media.desktop(`
        color: pink;
    `)}
`;
const ButtonStart = styled(Button)`
    margin: 25px auto 50px

`
const InputCenter = styled.div`
    margin-top: auto;
`
const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const StyledLink = styled(Link)`
    color: grey;
    text-decoration: none;
    font-size: 11px;
`
const HeaderContainer = styled.div`
    //margin: 0 auto;
    display: flex;
    justify-content: center;
`
const HeaderArrow = styled.span`
    width: 20px;
    height: 20px;
    background-color: #FFEB3B;
    display: block;
`
const HeaderTitle = styled(SubLogo)`
    font-size: 25px;
    letter-spacing: 0.3em;
`

// Оборачиваем в withRouter, чтобы получить доступ
// к this.props.history, нужен для редиректа
export const Logout = withRouter((props) => {
    localStorage.removeItem('logged');

    // Редирект на /login
    props.history.push("/login");
    return null;
});

class Login extends Component{
    constructor(props) {
        super(props);

        // При создании компонента
        // Проверяем залогинен ли юзер, если да, то редиректим
        // Нужно, чтобы нельзя было зайти на /login/
        // Когда мы уже авторизированы
        if(getLogged()) {
            this.props.history.push("/home");
        }
    }

    state = {
        login: '',
        password: '',
        visible: false
    }

    onChange = (inputName, event) => {

        // Получили значения инпута
        let value = event.target.value;


        this.setState({
            // Аналог obj[inputName]
            // Вместо ключа используем переменную
            // Получаем через bind, когда привязываем к инпуту событие
            [inputName]: value
        })
    };

    onLogin = () => {
        if (this.state.login.length < 1 || this.state.password.length < 1) {
            this.setState({
                visible: true
            })
        } else {
            localStorage.setItem('logged', true);

            // Редирект
            this.props.history.push("/home");
        }
    }

    render(){
        return (
        <Container>
            <Logo>TNR</Logo>
            <SubLogo>APP</SubLogo>
            <InputCenter>
                <ErrorMessage visible={this.state.visible}>Incorrect Login</ErrorMessage>
                <TextInput onChange={this.onChange.bind(this, 'login')}
                       value={this.state.login} placeholder="login"
                       type="text"
                           image={UsernameIcon}
                />

                <TextInput onChange={this.onChange.bind(this, 'password')}
                       value={this.state.password}
                           image={PasswordIcon}
                       placeholder="password" type="password"/>

                <ButtonStart type="button"
                        onClick={this.onLogin}>
                    get started
                </ButtonStart>
                <LinkContainer>
                    <StyledLink to="/signup">Create Account</StyledLink>
                    <StyledLink to="/">Need help?</StyledLink>
                </LinkContainer>
            </InputCenter>

        </Container>
        )
    }

}

export class SignupLocal extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    onChange = (inputName, event) => {
        // Получили значения инпута
        let value = event.target.value;
        this.setState({
            // Аналог obj[inputName]
            // Вместо ключа используем переменную
            // Получаем через bind, когда привязываем к инпуту событие
            [inputName]: value
        })
    };
    onSignup = () => {
        if (this.state.name.length < 1 || this.state.password.length < 1) {
            this.setState({
                visible: true
            })
        } else {
            console.log({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        }
    }

    render(){
        return(
            <Container>
                <HeaderContainer>
                    <HeaderArrow/>
                    <HeaderTitle>Create account</HeaderTitle>
                </HeaderContainer>
                <InputCenter>
                    <ErrorMessage visible={this.state.visible}>Incorrect data</ErrorMessage>
                    <TextInput placeholder='How are you?' type='text'/>
                    <TextInput
                        placeholder='Your name'
                        type='text'
                        image={UsernameIcon}
                        onChange={this.onChange.bind(this, 'name')}
                    />
                    <TextInput
                        placeholder='Your e-mail'
                        type='email'
                        onChange={this.onChange.bind(this, 'email')}
                    />
                    <TextInput
                        placeholder='Your Password'
                        type='password'
                        image={PasswordIcon}
                        onChange={this.onChange.bind(this, 'password')}
                    />
                    <ButtonStart
                        type='button'
                        onClick={this.onSignup}
                    >Get started</ButtonStart>
                    <LinkContainer>
                        <StyledLink to="/login">Login</StyledLink>
                        <StyledLink to="/">Need help?</StyledLink>
                    </LinkContainer>
                </InputCenter>
            </Container>

        )
    }
}
// Оборачиваем в withRouter, чтобы получить доступ
// к this.props.history, нужен для редиректа
export const Signup = withRouter(SignupLocal);
export default withRouter(Login);
