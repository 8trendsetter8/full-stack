import { registerUser } from './userRegistration.js';
import { cars } from './cars.js';

function checkAffordableCars(username) {
    const user = registerUser(username);
    console.log(`${username} has ${user}`)
}