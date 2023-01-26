
import mongoose from 'mongoose';
import { env } from '../configs/env';

const { applicationMessages } = require('../lang/lang')('en');

mongoose.set('strictQuery', true);
mongoose.connect(env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// when successfully connected
mongoose.connection.on('connected', () => {
    console.log(applicationMessages.MONGODB_CONNECTION_SUCCESS);
});

// if the connection throws an error
mongoose.connection.on('error', (err) => {
    //   if you get error for the first time when this gets started make sure to run mongodb
    console.log('Mongodb connection failed', err);
});

// when the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Mongodb disconnected');
});