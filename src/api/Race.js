import axios from 'axios';
const conf = require('./../config/Environments');

const getRace = season => axios.get(conf.API_RACE+`/${season}`+conf.API_EXTENTION)
const getDriver = season => axios.get(conf.API_RACE+`/${season}/results`+conf.API_EXTENTION+`?limit=10000`)

export { getRace,getDriver }