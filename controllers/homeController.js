const titleCase = require('title-case');
const fs = require('fs');
const path = require('path');

exports.respondWithPlanet = (req, res) => {
    let param = titleCase(req.params.planet);
    fs.readFile('public/text/' + req.params.planet + '.txt', 'utf8', (error, data) => {
        res.render("partials/planet", { planet: param,
                                        text:   data,
                                        lowerCasedPlanet: req.params.planet} );
    });

};
