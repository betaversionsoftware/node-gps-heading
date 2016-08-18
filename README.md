## Calculates heading / bearing between two GPS locations along the great circle.

[![Build Status](https://travis-ci.org/betaversionsoftware/node-gps-heading.svg?branch=master)](https://travis-ci.org/betaversionsoftware/node-gps-heading) [![Coverage Status](https://coveralls.io/repos/github/betaversionsoftware/node-gps-heading/badge.svg)](https://coveralls.io/github/betaversionsoftware/node-gps-heading)

[![deps](https://david-dm.org/betaversionsoftware/node-gps-heading.svg)](https://david-dm.org/betaversionsoftware/node-gps-heading.svg) [![devDependencies Status](https://david-dm.org/betaversionsoftware/node-gps-heading/dev-status.svg)](https://david-dm.org/betaversionsoftware/node-gps-heading?type=dev)

[![GitHub version](https://badge.fury.io/gh/betaversionsoftware%2Fnode-gps-heading.svg)](https://badge.fury.io/gh/betaversionsoftware%2Fnode-gps-heading) [![npm version](https://badge.fury.io/js/node-gps-heading.svg)](https://badge.fury.io/js/node-gps-heading)
### Install

```js
npm install node-gps-heading --save
```

### Example usage

```js
var gpsHeading = require('node-gps-heading');

var gps1 = {
  lat: -31.0000000,
  lng: 115.8480000
}

var gps2 = {
  lat: -32.0000000,
  lng: 115.8480000
}

gpsHeading.calculate(gps1, gps2, function(heading) {
  console.log(heading.degree);
  console.log(heading.radian);
});

var heading = gpsHeading.calculateSync(gps1, gps2);
console.log(heading.degree);
console.log(heading.radian);
```

### Test

```js
npm test
```
