const fs = require("fs");

const loadnotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json"));
  } catch (e) {
    return [];
  }
};

const add = (title, body) => {
  const notes = loadnotes();
  notes.push({ title, body }),
    fs.writeFileSync("notes.json", JSON.stringify(notes)),
    console.log(`note created`);
  console.log(`--
  Title: ${title}
  Body: ${body}
  --`);
};

const read = title => {
  let notes = loadnotes();
  notes = notes.filter(note => note.title === title);
  notes.length === 0
    ? console.log(`Note not found`)
    : (console.log("Note Found"),
      console.log(`--
  Title: ${notes[0].title}
  Body: ${notes[0].body} 
  `));
};

const remove = title => {
  let notes = loadnotes();
  let l = notes.length;
  notes = notes.filter(note => note.title !== title);
  notes.length < l
    ? (fs.writeFileSync("notes.json", JSON.stringify(notes)),
      console.log("note removed"))
    : console.log(`No note with title: ${title}`);
};

const list = () => {
  const notes = loadnotes();
  console.log(
    `Printing ${notes.length} note${
      notes.length === 1 || notes.length === 0 ? "" : "s"
    }`
  );
  notes.forEach(note => {
    console.log(
      `--
      Title: ${note.title}
      Body: ${note.body}
      `
    );
  });
};

module.exports = { add, read, remove, list };
