import { Rule, SchematicContext, Tree, url, apply, template, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
// Rule： 它是 Schematics 的核心，是一個接收 Tree 並回傳一個包含改變規則的 Tree。
// Tree： 它是檔案系統的結構描述，包含檔案狀態與改變檔案的規則。
// Source： 用來建立新的 Tree 。

// You don't have to export the function as default. You can also have more than one rule factory
// per file.

//--debug=false, --dry-run=false 

// <%= 參數名稱 %> 有= 是在變數時才會有
// for-of 記得去查
export function joseph(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    const fileName = _options.name || 'gayLord-default';
    tree.create('./result/' + fileName, 'joseph ');
    return tree;
  };
}

// type script _ means don't care/ used
export function andy(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {

    // // 讀取 angular.json ，如果沒有這個檔案表示該專案不是 Angular 專案
    // const workspaceConfigBuffer = _tree.read('angular.json');
    // if ( !workspaceConfigBuffer ) {
    //   throw new SchematicsException('Not an Angular CLI workspace');
    // }

    // // 解析出專案的正確路徑與檔名
    // const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    // const projectName = _options.project || workspaceConfig.defaultProject;
    // const project = workspaceConfig.projects[projectName];
    // const defaultProjectPath = buildDefaultPath(project);
    // const parsePath = parseName(defaultProjectPath, _options.name);
    // const { name, path } = parsePath;

    const sourceTemplates = url('./files'); // 使用範本

    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options, // 使用者所輸入的參數
        ...strings,
        addExclamation
      })
    ]);

    return mergeWith(sourceParametrizedTemplates);

  };
}

function addExclamation(value: string): string {
  return value + '_focker';
}
