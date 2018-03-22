import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect}
    from 'react-router-dom';
import News from "./components/News";
import CrossFit from "./components/CrossFit";
import Training from "./components/training";
import Login, {Logout, Signup} from "./components/Login";
import SelectTrainer from './components/training/SelectTrainer';
import {getLogged, excludeProp} from "./utils";
import Container from './components/Container';
import UsersList from './components/Users'
import CurrentUser from "./components/Users/CurrentUser";
import CreateTraining from './components/Users/CreateTraining'




const PrivateRoute = (props) => {

    // Новый компонент, который создан с меню
    let wrappedComponent = Container(props.component, props.title);

    // Проверяем залогинен ли пользователь
    if (getLogged()){

        // Перенаправляем на закрытый роутинг
        return <Route {...excludeProp(props, "component")}
            component={wrappedComponent} />
    } else {

        // Перенаправляем на страницу логина
        return <Redirect to="/login" />
    }
}

class App extends Component {
  render() {
    return (
        <div>
            {/* Обертка для всего что использует роутинг */}
            <Router>
                <div>

                    {/* Изменяющаяся часть роутера */}
                    <Switch>

                        {/* В зависимости от пути, отрисует компонент */}
                        <Route path="/login" component={Login} />

                        <Route path="/logout" component={Logout} />

                        <Route path="/signup" component={Signup} />

                        <Route path="/training" component={Training} />




                        {/* Закрытые роуты */}
                        <PrivateRoute path="/home" component={SelectTrainer} title="Some Page"/>

                        <PrivateRoute path="/users/:id/create/" component={CreateTraining} title="Create Training"/>

                        <PrivateRoute path="/users/:id/" component={CurrentUser} title="Current User"/>

                        <PrivateRoute path="/users/" component={UsersList} title="Users List"/>






                        {/*<PrivateRoute path="/users/:id/training/:type/day/:d" component={SelectExercises} title="SelectExercises"/>*/}



                        <Redirect to="/login"/>
                    </Switch>
                </div>
            </Router>

        </div>

    );
  }
};

export default App;