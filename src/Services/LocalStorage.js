import React, { Component } from 'react';

export function setStorage(key, value) {
    return localStorage.setItem(key, value);
}
export function getStorage(key) {
    return localStorage.getItem(key);
}