import axios from 'axios';
import constsants from './constsants';

const srvBaseUrl = constsants.githubApiBaseUrl;

const githubService = {
  async fetchUserByUsername(username) {
    return axios.get(`${srvBaseUrl}/users/${username}`);
  },
  async fetchReposByUsername(username) {
    return axios.get(`${srvBaseUrl}/users/${username}/repos`);
  },
  async fetchFollowersByUsername(username) {
    return axios.get(`${srvBaseUrl}/users/${username}/followers`);
  },
  async fetchFollowingByUsername(username) {
    return axios.get(`${srvBaseUrl}/users/${username}/following`);
  },
};

export default githubService;
