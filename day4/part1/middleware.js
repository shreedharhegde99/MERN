const m1 = (req, res, next) => {
	console.log("this is middleware m1");
	next();
};

const m2 = (req, res, next) => {
	console.log("middleware m2 ");
	next();
};
module.exports = { m1, m2 };
