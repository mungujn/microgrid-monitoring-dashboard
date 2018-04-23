/**
 * Created by nickson on 4/23/2018.
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