import React, {Component} from 'react';
import RenderIf from '../General/RenderIf.js'
import './index.css'

const Option = (props) => {
    return(
        <div className='select__option' >
            {props.children}
        </div>
    )
};

class Select extends Component {
    static Option = Option;
    state ={
        selectedIndex: '',
        visible: false
    };
    toggleList = () => {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        });
    };
    chooseOption =(index) => {
        this.setState({
            selectedIndex: this.props.children[index].props.children,
            visible: false,
        });
    };
    render(){
        return(
            <div className='select__wrapper'>
                <div className='select' onClick={this.toggleList}>
                    <RenderIf confirm={this.state.selectedIndex === ''}>
                        {this.props.placeholder}
                    </RenderIf>
                    <RenderIf confirm={this.state.selectedIndex !== ''}>
                        {this.state.selectedIndex}
                    </RenderIf>
                </div>
                <div className={`select__list ${this.state.visible ? 'select__list--visible' : ''}`}>
                {this.props.children.map((children, index) => {
                    return (<div key={index} className='select__item' onClick={this.chooseOption.bind(this, index)}>
                        {children}
                        </div>
                        )})}
                        </div>
            </div>
        )
    }
}
export default Select;