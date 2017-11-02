// initialState
const initialState = {
  people: []
}

// action constants
const SET_PEOPLE = 'SET_PEOPLE';

// action creators
export function setPeople(people) {
  return {
    type: SET_PEOPLE,
    payload: people
  }
}

// reducer function
export default function reducer(state = initialState, action) {
  if (action.type === SET_PEOPLE) return Object.assign({}, state, {people: action.payload});
  else return state;
}