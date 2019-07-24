import axios from 'axios';
import { key, proxy } from '../config';
import pizza from './data/pizza.js';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            // const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            // const res = await axios(`${proxy}https://serene-hollows-36302.herokuapp.com/api/v1/search?q=${this.query}`);
            // console.log(res);
            // this.result = res.data.recipes;
            this.result = pizza.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}


