import axios from 'axios';

export const api = {
  getBatmanList: async () => {
    return await axios.get('http://api.tvmaze.com/singlesearch/shows?q=batman');
  }
}