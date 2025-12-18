'use strict'

require("dotenv").config();
const ACQUIRE = process.env.ACQUIRE_URL;

async function getData() {
    const url = ACQUIRE + "/data";
    const headers = {
    "Content-Type": "application/json"
    };
    const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({})
    });
    if (!response.ok){
        throw new Error(`Error Acquire: ${response.status}`)
    }

    const data = await response.json();
    
    return data.response;
}

module.exports = {getData};