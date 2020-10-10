
const fs = require("fs");
const social = require("../social");

for (let set_name in social.sets) {
	let set_filename = `social-${set_name}.json`;
	let set = social.sets[set_name];
	let set_nodes = [];
	for (let node of social.nodes) {
		if (set.includes(node.class)) {
			set_nodes.push(node);
		}
	}

	let set_object = {
		"nodes": set_nodes
	};
	fs.writeFileSync(set_filename, JSON.stringify(set_object));
}


