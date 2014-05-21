
### Setup

```
npm install zipcodelookup
npm install zipcodelookup --save (if you want to save the package to the package.json file)
```

```
Download the zipcode database available at http://www.unitedstateszipcodes.org/zip-code-database/ and place it under 
node_modules/zipcodelookup/data/zip_code_database.csv
```

### Sample usage
```
  var ZipLookupService  = require('zipcodelookup');
  ziplookupService.initConfig('path to the csv file'); // or leave empty if you have already placed it as in the path above.
  var response = ZipLookupService.zipCodeLookup('94085', 'US');
```

```json
{"zipcode":"94085","type":"STANDARD","primary_city":"Sunnyvale","acceptable_cities":"","unacceptable_cities":"","state":"CA","county":"Santa Clara County","timezone":"America/Los_Angeles","area_codes":"408","latitude":"650","longitude":"510","world_region":"37.38","country":"-122.01"}
```

  



