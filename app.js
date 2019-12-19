const func = require("./methode");
const command = process.argv[2];
const title = process.argv[3];
const body = process.argv[4];

switch (command) {
  case "add":
    methode.add(title, body);
    break;
  case "read":
    methode.read(title);
    break;
  case "list":
    methode.list();
    break;
  case "remove":
    methode.remove(title);
    break;
  default:
    console.log("Invalid Command");
    break;
}
