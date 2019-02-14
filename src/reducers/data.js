import { getState } from './dataGenerator'

const initialState = getState()

export default function(state = initialState, action){
    switch (action) {
        default:
            return state
    }
}