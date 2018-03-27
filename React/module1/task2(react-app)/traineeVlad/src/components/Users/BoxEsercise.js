import React from 'react'
import Select from "../ui/Select";
import styled from "styled-components";

const Box = styled.div`
  margin-bottom: 10px;
`;

const BoxExercise = (props) => {
    console.log('propss',props);
    return (
            <Box>
                <span>num {props.num}</span>
                <Select placeholder='Select exercises'>
                    {props.arr.map( (exe, index) => {
                        return (
                            <Select.Option key={index}>{exe}</Select.Option>
                        )
                    } )}
                </Select>
                <input type='time'/>
                <input type="number" placeholder='count'/>
                <input type='text' placeholder='comment'/>
                <select>
                    <option>Пн</option>
                    <option>Вт</option>
                    <option>Ср</option>
                    <option>Чт</option>
                    <option>Пт</option>
                    <option>Сб</option>
                    <option>Вс</option>
                </select>
            </Box>
)
}
export default BoxExercise