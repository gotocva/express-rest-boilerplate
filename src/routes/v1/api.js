import express from 'express';



const v1Router = express.Router();

import { usersList } from '../../api/v1/user/list';

/**
 * User module routes 
 */
v1Router.get('/user/list', [], usersList);




module.exports = { v1Router };