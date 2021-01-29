const express = require("express");
const app = express();
const port = process.env.PORT || 9001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => res.send("Up and running."));

app.get("/header-nav", (req, res) => {
  res.send({
    productsData: ["VVS", "El", "Stål", "Energi & Klima", "Værktøj"],
    servicesData: ["Service", "Rådgivning"],
    loggedInData: [
      { page: "Indbakke", iconName: "Brev" },
      { page: "Godkend", iconName: "Kurv" },
      { page: "Ordre", iconName: "Download" },
      { page: "Returnering", iconName: "LinkPil" },
      { page: "Favoritlister", iconName: "Favorit" },
      { page: "Data", iconName: "Download" },
      { page: "Fordele", iconName: "Filtre" },
      { page: "Statestik", iconName: "Home" },
      { page: "Konti", iconName: "Indstillinger" },
      { page: "Admin", iconName: "Brugernavn" },
    ],
    footerMobileData: [
      "Kundeservice",
      "Kontakt afdelinger",
      "Om Lemvigh-Müller",
    ],
  });
});

app.get("/hours", (req, res) => {
  res.send({
    Monday: "8-16:30",
    Tuesday: "8-16:30",
    Wednesday: "8-16:50",
    Thursday: "8-16:30",
    Friday: "8-16:30",
    Saturday: "closed",
    Sunday: "closed",
  });
});

app.get("/queue-1", (req, res) => {
  res.send({
    callersWaiting: 5,
    waitTime: 445,
  });
});

app.get("/queue-2", (req, res) => {
  res.send({
    callersWaiting: 5,
    waitTime: 15,
  });
});

app.get("/queue-3", (req, res) => {
  res.send({
    callersWaiting: 5,
  });
});

app.post("/", (req, res) => {
  res.status(200).send({
    ok: true,
    message: "Received a POST request",
    data: req.body,
  });
});

app.listen(port, () =>
  console.log(`Dummy endpoints ready at http://localhost:${port}.`)
);
