#!/usr/bin/node
/**
 * a script that prints all characters of the star wars movie
 **/

const request = require('request');
const StarWars = 'https://swapi-api.alx-tools.com/api/films/';

request(StarWars, function (error, body, response) {
  if (!error && response.statusCode === 200) {
	  const characters = JSON.parse(body);
	  // characters.forEach(function (character) {
	  // console.log(character.id + ' ' + character.name)
	  // });
    printCharacters(characters, 0);
  } else {
    console.error(response.statusCode);
  }
});

function printCharacters (characters, index) {
  request(characters[index], function (err, response, body) {
    if (!err) {
      console.log(JSON.parse(body).name);
      if (index + 1 < characters.length) {
        printCharacters(characters, index + 1);
      }
    }
  });
}
