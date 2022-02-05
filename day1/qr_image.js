const qr = require("qr-image");
const fs = require("fs");

const qr_img = qr.image("Shreedhar Hegde", {
	type: "png",
	size: 10,
});

qr_img.pipe(fs.createWriteStream("qrcode1.png"));
