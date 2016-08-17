var assert = require('assert');

var gpsHeading = require('../index.js');

var expectedHeadingRadian = 3.141592653589793;
var expectedHeadingDegree = 180;

var gps1 = {
    lat: -31.0000000,
    lng: 115.8480000
}

var gps2 = {
    lat: -32.0000000,
    lng: 115.8480000
}

describe('Heading from gps1 towards gps2 (asynchronous)', function() {
    it('should return heading in degrees', function(done) {
        gpsHeading.calculate(gps1, gps2, function(heading) {
            assert.equal(expectedHeadingDegree, heading.degree);
            done();
        });
    });

    it('should return heading in radians', function(done) {
        gpsHeading.calculate(gps1, gps2, function(heading) {
            assert.equal(expectedHeadingRadian, heading.radian);
            done();
        });
    });
});


describe('Heading from gps1 towards gps2 (synchronous)', function() {
    it('should return heading in degrees', function(done) {
        var res = gpsHeading.calculateSync(gps1, gps2);
        assert.equal(expectedHeadingDegree, res.degree);
        done();
    });

    it('should return heading in radians', function(done) {
        var res = gpsHeading.calculateSync(gps1, gps2);
        assert.equal(expectedHeadingRadian, res.radian);
        done();
    });
});

