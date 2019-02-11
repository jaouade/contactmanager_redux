import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT,
  GET_CONTACT
} from './types';
import contactService from '../services/contactService';
export const getContacts = () => async dispatch => {
  const contacts = await contactService.all();
  dispatch({
    type: GET_CONTACTS,
    payload: contacts
  });
};
export const deleteContact = id => async dispatch => {
  await contactService.deleteById(id);
  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
};
export const addContact = newContact => async dispatch => {
  const contact = await contactService.add(newContact);

  dispatch({
    type: ADD_CONTACT,
    payload: contact
  });
};
export const updateContact = newContact => async dispatch => {
  const contact = await contactService.update(newContact);

  dispatch({
    type: EDIT_CONTACT,
    payload: contact
  });
};
export const getOne = id => async dispatch => {
  const contact = await contactService.getOne(id);
  dispatch({
    type: GET_CONTACT,
    payload: contact
  });
};
