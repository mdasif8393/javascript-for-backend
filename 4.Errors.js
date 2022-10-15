import { errorHandler, two } from './errorHandler'
two();

async function getData() {
    try {
        undefined.find();

        //manual error generator
        const emailError = new Error('Email already exists');
        throw emailError;
    }
    catch (error) {
        errorHandler(error);
    }
}

getData();



