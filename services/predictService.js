'use strict'

require("dotenv").config();
const PREDICT = process.env.PREDICT_URL;

async function predict(features, meta) {
    const url = PREDICT + "/predict";
    const headers = {
    "Content-Type": "application/json"
    };
    const body = {
        features: features,
        meta: meta,
    };

    const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    });
    if (!response.ok){
        throw new Error(`Error Predict: ${response.status}`)
    }

    const json = await response.json();

    return json;
}

module.exports = {predict};