import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

const fetchData = axios.create({
    baseURL: baseURL
})

const getPosts =  async () => await fetchData.get(`/posts`);

const getUser = async (id) => await fetchData.get(`/users/${id}`);

export {getPosts, getUser};