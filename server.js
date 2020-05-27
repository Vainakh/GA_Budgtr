const express = require("express");
const app = express();

const PORT = 3000;
const budget = require("./models/budget.js");

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

// //1 Home route
// app.get("/", (req, res) => {
//   res.render("index.ejs");
// });

//2 Index route
app.get("/show/", (req, res) => {
  res.render(
    "index.ejs",
    {
      budget:budget
    }
  );
});

//4 new route
app.get("/show/new", (req, res) => {
  res.render("new.ejs");
})

//3 Show route
app.get("/show/:id", (req, res) => {
  res.render(
    "show.ejs",
    {
      bud:budget[req.params.id]
    }
  )
});


app.post("/show", (req, res) => {
  budget.push(req.body);
  res.redirect("/show");
})

app.listen(PORT, () => {
  console.log('I am listening...');
});