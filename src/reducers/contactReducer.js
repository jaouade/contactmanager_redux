import {
  GET_CONTACTS,
  GET_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT
} from '../actions/types';

const initialState = {
  contacts: [],
  toBeUpdatedContact: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case GET_CONTACT:
      return {
        ...state,
        toBeUpdatedContact: action.payload
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
}
