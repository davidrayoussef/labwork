// Create a class design to represent a filesystem.
// Likely classes: Filesystem, Directory, File, Permission.
// What's their relationship? Model a Directory containing many files

class File {
  constructor(name, currentDirectory, isDirectory = false) {
    this.name = name;
    this.currentDirectory = currentDirectory;
    this.timeStamp = new Date();
    this.size = 0;
    this.parentDirectory = [];

    if (isDirectory) {
      this.subFiles = [];
    }

  }

  updateTimeStamp() {
    this.timeStamp = new Date();
  }

  getParentDirectory() {
    return this.parentDirectory;
  }

  rename(newName) {
    this.name = newName;
  }

}

class FileSystem {
  constructor() {
    this.root = new File('root', null, true);
  }

  createFile(name, currentDirectory, isDirectory) {
    const file = new File(name, currentDirectory, isDirectory);
    this.root.subFiles.push(file);
    console.log(this);
    // return file;
  }
}

const osiris = new FileSystem();

osiris.createFile('index.js', 'awesome-project', false);
