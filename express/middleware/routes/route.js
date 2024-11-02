const express = require('express')
const router = express.Router();

//middlewares
const auth = function (req, res, next) {
	console.log("Inside auth")
	req.user = { userID: 1, role: "member" };

	if (req.user) {
		next();
	}
	else {
		res.json({
			success: false,
			message: "Not a valid user",
		})
	}
}

const isAdmin = function (req, res, next) {
	console.log("Inside isAdmin");
	if (req.user.role === "admin") {
		next();
	}
	else {
		res.json({
			success: false,
			message: "Not an admin"
		})
	}
}

const isMember = function (req, res, next) {
	console.log("Inside isMember");
	if (req.user.role === "member") {
		next();
	}
	else {
		res.send({
			success: false,
			message: "Not a member"
		})
	}
}

//routes
router.get('/', (req, res) => {
	res.send('Welcome')
})

router.get("/member", auth, isMember, (req, res) => {
	console.log("Inside member route");
	res.send("Member specific page")
})

router.get("/admin", auth, isAdmin, (req, res) => {
	console.log("Inside admin route");
	res.send("Admin specific page")
})

module.exports = router