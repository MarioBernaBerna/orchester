'use strict'

const { predict } = require("../services/predictService");
const {getData} = require("../services/acquireService");

async function run(req, res){

    const data = await getData();
    const { dataId, features, featureCount, scalerVersion, createdAt } = data;
    const meta = {
        featureCount: featureCount,
        dataId: dataId,
        source: "orchester",
        correlationId: ""
    };

    const prediction = await predict(features, meta);

    res.json({
        dataId: dataId,
        predictionId: prediction.predictionId,
        prediction: prediction.prediction,
        timestamp: prediction.timestamp
    })

}

function health(req, res){
    res.json({
        status: "ok",
        service: "orchester"
    });
}

module.exports = {run, health};