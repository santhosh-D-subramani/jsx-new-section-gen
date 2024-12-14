import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'jsx-new-section-gen.createSection',
    async (clickedFolderUri: vscode.Uri) => {
      // Ask for the new folder name
      const folderName = await vscode.window.showInputBox({
        prompt: 'Enter the name of the new section folder',
        placeHolder: 'Section1',
      });

      if (!folderName) {
        vscode.window.showErrorMessage('Folder name cannot be empty.');
        return;
      }

      const folderPath = path.join(clickedFolderUri.fsPath, folderName);

      try {
        // Create the new folder
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
        } else {
          vscode.window.showErrorMessage('Folder already exists.');
          return;
        }

        // Create index.jsx
        const jsxTemplate = `import classes from './index.module.css';

export function ${capitalizeFirstLetter(folderName)}() {
  return <div></div>;
}
`;
        fs.writeFileSync(path.join(folderPath, 'index.jsx'), jsxTemplate);

        // Create index.module.css
        fs.writeFileSync(path.join(folderPath, 'index.module.css'), '');

        vscode.window.showInformationMessage(`Section '${folderName}' created successfully.`);
      } catch (error) {
        if (error instanceof Error) {
          vscode.window.showErrorMessage(`Error creating section: ${error.message}`);
        } else {
          vscode.window.showErrorMessage('An unknown error occurred while creating the section.');
        }
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}

function capitalizeFirstLetter(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
