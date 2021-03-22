const vio = {
    namevio: "Violaine",
    campus: "Paris"
}

module.exports = vio;

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello I'm  ${vio["namevio"]} from ${vio["campus"]} Campus`,
	e : "oO",
	T : "U "
}));