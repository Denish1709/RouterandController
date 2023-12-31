const express = require("express");
const app = express();

let parks = [
  {
    id: 1,
    name: "Yellowstone National Park",
    facilities: ["campgrounds", "visitor-center", "trails"],
  },
  {
    id: 2,
    name: "Zion National Park",
    facilities: ["trails", "visitor-center"],
  },
];

let visitors = [
  { id: 1, name: "John Doe", pastReservations: [1], upcomingReservations: [2] },
  { id: 2, name: "Jane Smith", pastReservations: [], upcomingReservations: [] },
];

let reservations = [
  { id: 1, parkId: 1, visitorId: 1, date: "2023-09-01" },
  { id: 2, parkId: 2, visitorId: 1, date: "2023-10-01" },
];

app.get("/parks", (req, res) => {
  res.json(parks);
});

app.get("/parks/:id", (req, res) => {
  const park = parks.find((p) => parseInt(p.id) === parseInt(req.params.id));
  if (park) {
    res.status(200).json(park);
  } else {
    // error handling
    res.status(404).json({ error: "Park ID provided is not available" });
  }
});

app.get("/visitors", (req, res) => {
  res.json(visitors);
});

app.get("/visitors/:id", (req, res) => {
  const visitorId = parseInt(req.params.id);
});

app.get("/reservations", (req, res) => {
  res.json(reservations);
});

app.get("/reservations/:id", (req, res) => {
  const reservation = reservations.find(
    (p) => parseInt(p.id) === parseInt(req.params.id)
  );
  if (reservation) {
    res.status(200).json(reservation);
  } else {
    res.status(404).json("Reservation ID is not available");
  }
});

app.get("/", (req, res) => {
  res.send(
    '<a href="/parks"> Parks </a> <br/> <a href="/visitors"> Visitors </a> <br/> <a href="/reservations"> Reservation </a>'
  );
});

app.listen(5000, () => {
  console.log("National Park Visitor System is running on port 5000");
});
