const yargs = require("yargs");
const methode = require("./methode");

yargs.command({
  command: "add",
  describe: "Add note",
  builder: {
    title: {
      describe: "the title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "the body",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    methode.add(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove note",
  builder: {
    title: {
      describe: "the title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    methode.remove(argv.title);
  }
});

yargs.command({
  command: "read",
  describe: "Read note",
  builder: {
    title: {
      describe: "the title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    methode.read(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "Read all notes",
  handler: () => {
    methode.list();
  }
});

yargs.parse();
