import { createStore } from 'redux';

const initialState = {
    checkboxList: [
        {
            id: 1,
            name: 'ex1',
            checked: false,
        }, {
            id: 2,
            name: 'ex2',
            checked: true,
        }

    ]
}


const tamplate = {
    id: 'temp1',
    name: 'exTemp1',
    checked: false,
}
const ACTIONS = {
    'ADD_NEW_CHECKBOX': 'ADD_NEW_CHECKBOX',
    'TOGGLE': 'TOGGLE',
    'DELETE_CHECKBOX': 'DELETE_CHECKBOX',
}

const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_NEW_CHECKBOX: {
            return {
                checkboxList: [...state.checkboxList, {
                    id: Math.random(),
                    name: action.name,
                    checked: false,
                }]
            }
        }
        case ACTIONS.TOGGLE: {
            return {
                checkboxList: state.checkboxList.map((ex) => {
                if (action.id === ex.id) {
                    ex.checked = !ex.checked
                }
                return ex
            })
            }
        }
        case ACTIONS.DELETE_CHECKBOX: {
            return {
                checkboxList: [...state.checkboxList.filter((ex) => {
                    if(action.id === ex.id) {
                        return false
                    }
                    return ex
                })]
            }
        }

        default: {
            return state
        }
    }

} )

export default store;