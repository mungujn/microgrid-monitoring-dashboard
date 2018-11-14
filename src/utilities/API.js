/**
 * Created by nickson on 4/23/2018.
 * Backend abstraction module
 */
import * as backend from './Real'

export function login(email, password) {
    return backend.login(email, password)
}


export function logout(email, password) {
    return backend.logout(email, password)
}


export function isLoggedIn() {
    return backend.isLoggedIn()
}

export function saveData(location, key, value){
    backend.saveData(location, key, value)
}

export function readData(location, key){
    return backend.readData(location, key)
}

export function updateData(location, key, values){
    return backend.updateData(location, key, values)
}