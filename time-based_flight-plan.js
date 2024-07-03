"use strict";

var bebop = require("../.");

var drone = bebop.createClient();

var alreadyFlying = false;

drone.connect(function() {
  drone.on("GPSFixStateChanged", function(data) {
    console.log("GPSFixStateChanged", data);
  });

  drone.on("MavlinkPlayErrorStateChanged", function(data) {
    console.log("MavlinkPlayErrorStateChanged", data);
  });

  drone.on("MavlinkFilePlayingStateChanged", function(data) {
    console.log("MavlinkFilePlayingStateChanged", data);
  });

  drone.on("AvailabilityStateChanged", function(data) {
    console.log("AvailabilityStateChanged", data);
    if (data.AvailabilityState === 1 && !alreadyFlying) {
      alreadyFlying = true;
      drone.Mavlink.start("/data/ftp/internal_000/flightplans/flightPlan.mavlink", 0);
    }
  });


  drone.on("ComponentStateListChanged", function(data) {
    console.log("ComponentStateListChanged", data);
  });

  drone.on("ready", function () {
    console.log("ready");
  });

  drone.on("battery", function (data) {
    console.log(data);
  });

  drone.on("landed", function () {
    console.log("landed");
  });

  drone.on("takingOff", function () {
    console.log("takingOff");
  });

  drone.on("hovering", function () {
    console.log("hovering");
  });

  drone.on("FlyingStateChanged", function () {
    console.log("FlyingStateChanged");
  });

  drone.on("BatteryStateChanged", function () {
    console.log("BatteryStateChanged");
  });

  drone.on("flying", function() {
    console.log("flying");
  });

  drone.on("landing", function() {
    console.log("landing");
  });

  drone.on("unknown", function(data) {
    console.log("unknown", data);
  });

drone.connect(function() {
  drone.takeOff();

  setTimeout(function()  {
    drone.forward(50);
  }, 7000);

  setTimeout(function() {
    drone.right(30);
  }, 3000);

  setTimeout(function() {
    drone.forward(50);
  }, 4000);

  setTimeout(function() {
    drone.stop();
  }, 4000);

  setTimeout(function() {
    drone.left(30);
  }, 3000);

  setTimeout(function() {
    drone.stop();
  }, 6000);

  setTimeout(function() {
    drone.forward(50);
  }, 4000);

  setTimeout(function() {
    drone.stop();
  }, 6000);

  setTimeout(function() {
    drone.forward(50);
  }, 2000);

  setTimeout(function() {
    drone.stop();
  }, 2000);

  setTimeout(function() {
    drone.left(30);
  }, 3000);

  setTimeout(function() {
    drone.stop();
  }, 6000);

  setTimeout(function() {
    drone.forward(30);
  }, 2000);

  setTimeout(function() {
    drone.stop();
  }, 30000);

  setTimeout(function() {
    drone.forward(30);
  }, 3000);

  setTimeout(function() {
    drone.stop();
  }, 6000);


  setTimeout(function() {
    drone.land();
  }, 5000);
});
});




