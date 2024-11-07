const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const exp = require("constants");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/users", (req, res) => {
  const html = `
		<ul>
			${users.map((user) => `<li>${user.first_name}</li>`).join("")}
		</ul>
	`;
  res.send(html);
});

//REST API

app.get("/api/users", (req, res) => {
  //custom header
  res.setHeader("X-MyName", "Kuzuri");
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json("user not found");
    }
    return res.json(user);
  })
  .patch((req, res) => {
    // patch
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // delete
    return res.json({ status: "pending" });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  // status code
  if (!body || !body.first_name) {
    return res.status(400).json("First Name is required");
  }
  // console.log("Body:", body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "success", id: users.length });
  });
  // return res.json({ status: "pending" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
