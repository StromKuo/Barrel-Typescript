'use strict';

const Fs = require('fire-fs');
const Path = require('path');

const builder_1 = require("./bin/builder");
const destinations_1 = require("./bin/destinations");
const fileTree_1 = require("./bin/fileTree");
const options_1 = require("./bin/options");
const purge_1 = require("./bin/purge");

function update() {
  // Get the launch options/arguments.
  let options = options_1.getOptions();
  options.rootPath = Editor.url('db://assets');
  options.delete = true;
  // Build the directory tree.
  const rootTree = fileTree_1.buildTree(options.rootPath, options);
  // Work out which directories should have barrels.
  const destinations = destinations_1.getDestinations(rootTree, options);
  // Potentially there are some existing barrels that need removing.
  purge_1.purge(rootTree, options);
  // Create the barrels.
  builder_1.buildBarrels(destinations, options);
  Editor.assetdb.refresh('db://assets/index.ts', function (err, results) { });
}

module.exports = {
  load() {
    //update();
    // execute when package loaded
  },

  unload() {
    // execute when package unloaded
  },

  // register your ipc messages here
  messages: {
    'about'() {
      // open entry panel registered in package.json
      Editor.Panel.open('barrel-typescript');
    },
    'add-tsconfig'() {
      // send ipc message to panel
      Editor.Ipc.sendToPanel('barrel-typescript', 'barrel-typescript:hello');
      var srcPath = Editor.url('packages://barrel-typescript/template/tsconfig.json');
      var targetFile = Path.normalize(Path.join(Editor.projectInfo.path, "/tsconfig.json"));;
      try {
        Fs.copySync(srcPath, targetFile);
        Editor.log("Barrel-Typescript: TypeScript Configuration file has been copied to" + targetFile);
      } catch (err) {
        Editor.warn(`Copy file ${srcPath} to ${targetFile} failed. message: ${err.stack}`);
        return false;
      }
      update();
    },
    'clicked'() {
      Editor.log('Button clicked!');
    },
    'asset-db:assets-created'() {
      update();
    },
    'asset-db:assets-moved'() {
      update();
    },
    'asset-db:assets-deleted'() {
      update();
    },
    'asset-db:assets-changed'() {
      update();
    }
  },
};