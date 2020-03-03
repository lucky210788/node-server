import axios from './axios-set';

export default class ApiService {
  async getUsers() {
    try {
      let res = await axios.get('api/users');
      return await  res.data;
    }
    catch (e) {
      console.log('Error', e);
    }
  }

  async postUser(user) {
    try {
      let res = await axios.post('api/users', user);
      return await  res.data
    }
    catch (e) {
      console.log('Error', e);
    }
  }

  async deleteUser(id) {
    try {
      axios.delete(`api/users/${id}`)
    }
    catch (e) {
      console.log('Error', e);
    }
  }

  async changeUser(id, data,) {
    try {
      await axios.put(`api/users/${id}`, data);
    }
    catch (e) {
      console.log('Error', e);
    }
  }

  async getPosts(id) {
    try {
      let res = await axios.get(`api/posts/${id}`);
      return await  res.data;
    }
    catch (e) {
      console.log('Error', e);
    }
  }

  async postPost(id, title) {
    try {
      let res = await axios.post(`api/posts/${id}`, title);
      return await  res.data
    }
    catch (e) {
      console.log('Error', e);
    }
  }

  async deletePost(id) {
    try {
      axios.delete(`api/posts/${id}`)
    }
    catch (e) {
      console.log('Error', e);
    }
  }

  async changePost(id, data,) {
    try {
      await axios.put(`api/posts/${id}`, data);
    }
    catch (e) {
      console.log('Error', e);
    }
  }
}