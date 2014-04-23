/**
 * Created by prashanth.radghavan on 4/23/14.
 */


'use strict';

var fs = require('fs'),
    path = require('path'),
    csv = require('csv'),
    _   = require('lodash'),
    Q   = require('q'),
    data = '';

module.exports = (function() {

  var zipDBPath = '';
  var hash = [];

  var initConfig = function(dbpath) {
    zipDBPath = dbpath || '../data/zip_code_database.csv';
    data = fs.readFileSync(path.join(__dirname, zipDBPath), 'utf8').replace(/\r/g, '').split('\n').shift();
    parseCSV();
  };

  var cleanse = function(string) {
    return string.replace(/"/g, '').trimLeft();
  };


  var parseCSV = function() {

    //@TODO Serialize the parsed output to a file so that we dont have to initialize every time

    data.forEach(function(line, num) {
      line = line.split(',');
      if (line.length > 1) {
        var obj = {
          zipcode: cleanse(line.shift()),
          type:    cleanse(line.shift()),
          primary_city: cleanse(line.shift()),
          acceptable_cities: cleanse(line.shift()),
          unacceptable_cities: cleanse(line.shift()),
          state:  cleanse(line.shift()),
          county: cleanse(line.shift()),
          timezone: cleanse(line.shift()),
          area_codes: cleanse(line.shift()),
          latitude: cleanse(line.shift()),
          longitude: cleanse(line.shift()),
          world_region: cleanse(line.shift()),
          country: cleanse(line.shift())
        }
        hash[obj.zipcode] = obj;
      }
    });
  };

  var zipCodeLookup = function(zipcode, country) {
    //output();
    country = country || 'US';  // Will default to US for now. Future use.
    return JSON.stringify(hash[zipcode]);
  };

  var printout = function() {
    console.log(hash);
  };



  return {
    initConfig: initConfig,
    zipCodeLookup: zipCodeLookup,
    printout: printout
  }

})();

