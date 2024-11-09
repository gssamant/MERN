const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const exp = require("constants");
const app = express();
const PORT = 3000;

//Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/my-app")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error", err));

//schema
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/users", async (req, res) => {
  const allUsers = await User.find({});
  const html = `
		<ul>
			${allUsers.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join("")}
		</ul>
	`;
  res.send(html);
});

//REST API

app.get("/api/users", async (req, res) => {
  //custom header
  const users = await User.find({});
  res.setHeader("X-MyName", "Kuzuri");
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    // const users = await User.find({})
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json("user not found");
    }
    return res.json(user);
  })
  .patch(async (req, res) => {
    // patch
    await User.findByIdAndUpdate(req.params.id, { last_name: "Changed" });
    return res.json({ status: "success" });
  })
  .delete(async (req, res) => {
    // delete
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
  });

app.post("/api/users", async (req, res) => {
  const body = req.body;
  // status code
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return res.status(400).json("First Name is required");
  }
  // console.log("Body:", body);
  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   return res.status(201).json({ status: "success", id: users.length });
  // });
  // return res.json({ status: "pending" });

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });
  console.log("result ", result);
  return res.status(201).json({ msg: "success" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
