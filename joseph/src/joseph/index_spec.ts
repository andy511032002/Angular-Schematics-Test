import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';


const collectionPath = path.join(__dirname, '../collection.json');


describe('joseph', () => {

  let runner: SchematicTestRunner;

  beforeEach(() => {
    runner = new SchematicTestRunner('schematics', collectionPath);
  }) 
  // it('works', () => {
  //   const runner = new SchematicTestRunner('schematics', collectionPath);
  //   const tree = runner.runSchematic('joseph', {}, Tree.empty());
  //   console.log(tree.files)
  //   expect(tree.files).toEqual([]);
  // });

  it('gaylord', () => {
    const tree = runner.runSchematic('joseph', {}, Tree.empty());
    expect(tree.files.length).toEqual(1);
  });

  it('gaylord', () => {
    const fileName = 'focker';
    const tree = runner.runSchematic('joseph', {name: fileName}, Tree.empty());
    const paths = tree.files[0].split('/');
    const resultName = paths[paths.length - 1];
    // expect(resultName).toEqual(fileName);
    // 陣列中資料有包含即可
    expect(tree.files).withContext(resultName);
    // 內容
    // readContent 

  });

  

});



