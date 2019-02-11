import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users/';

export default {
  all: async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
  },
  add: async contact => {
    const res = await axios.post(BASE_URL, contact);
    return res.data;
  },

  deleteById: async id => {
    const res = await axios.delete(`${BASE_URL}${id}`);
    return res.data;
  },

  update: async updContact => {
    const res = await axios.put(`${BASE_URL}${updContact.id}`, updContact);
    return res.data;
  },
  getOne: async id => {
    const res = await axios.get(`${BASE_URL}${id}`);
    return res.data;
  }
};
