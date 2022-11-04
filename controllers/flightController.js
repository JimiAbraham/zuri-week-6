const Flights = require("../models/Flight");



exports.example = (req, res) => {
    // console.log(Flights)
    res.send(Flights);
}





exports.bookFlight = (req, res) => {

    console.log(req.body);
    console.log(Flights);

    Flights.push(req.body);

    // newFlight = new Flights;

    // newFlight.title = req.body.title;

    res.send('Bookings Successfully Made, Stat prepping to fly');
}




exports.allFlight = (req, res) => {
    //console.log(Flights)

    res.send(Flights);
}



exports.singleFlight = (req, res) => {
    res.send('a single fLights details');
}



exports.updateFlight = (req, res) => {
    res.send(' update flight details');
}


exports.deleteFlight = (req, res) => {
    res.send(' delete flight');
}