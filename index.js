
exports.calculate = function(gps1, gps2, callback) {
        
    var dLon = (gps2.lng-gps1.lng) * Math.PI / 180;
		
    lat1 = gps1.lat * Math.PI / 180;
    lat2 = gps2.lat * Math.PI / 180;
		
    var y = Math.sin(dLon) * Math.cos(gps2.lat);
    var x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);

    var rad = Math.atan2(y, x);	
    var deg = rad * 180 / Math.PI;

    return callback({
        radian: rad, 
	degree: deg
    });
}

exports.calculateSync = function(gps1, gps2) {

    var dLon = (gps2.lng-gps1.lng) * Math.PI / 180;

    lat1 = gps1.lat * Math.PI / 180;
    lat2 = gps2.lat * Math.PI / 180;

    var y = Math.sin(dLon) * Math.cos(gps2.lat);
    var x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);

    var rad = Math.atan2(y, x);
    var deg = rad * 180 / Math.PI;

    return {
        radian: rad,
        degree: deg
    };
}

