## Calculates heading / bearing between two GPS locations along the great circle.

![Build Status](https://travis-ci.org/betaversionsoftware/node-gps-heading.svg?branch=master)
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
