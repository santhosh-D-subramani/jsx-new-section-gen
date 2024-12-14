# JSX New Section Generator

## Description
The **JSX New Section Generator** is a VS Code extension designed to speed up your React development workflow. With a simple right-click, you can generate a folder containing:

1. `index.jsx` - Pre-populated with a functional component template.
2. `index.module.css` - An empty CSS module file.

This eliminates repetitive boilerplate creation, allowing you to focus on building features.

---

## Features
- **Right-Click Context Menu:**
  - Right-click on any folder in the Explorer.
  - Select `Create New Section` from the context menu.
- **Input Prompt:**
  - Enter the name for the new section folder.
  - The folder and its files will be auto-generated with the given name.
- **Boilerplate Code Generation:**
  - `index.jsx` includes a React functional component with the proper CSS import.
  - The functional component name is automatically capitalized based on your input.
- **Error Handling:**
  - Prevents overwriting existing folders.
  - Displays clear error messages for invalid inputs or unexpected issues.

---

## Installation
1. Clone the repository or download the extension from the Visual Studio Code Marketplace (once published).
2. Open the extension folder in your terminal.
3. Run:
   ```bash
   npm install
   npm run compile
   ```
4. Launch the Extension Development Host by pressing `F5` in VS Code.

---

## Usage
1. Open a project in VS Code.
2. In the Explorer view, right-click on an existing folder.
3. Select `Create New Section` from the context menu.
4. Enter the name for the new section folder (e.g., `Section1`).
5. A new folder will be created at the clicked location, containing:
   - `index.jsx`
   - `index.module.css`

Example `index.jsx` output for `Section1`:

```jsx
import classes from './index.module.css';

export function Section1() {
  return <div></div>;
}
```

---

## Requirements
- Visual Studio Code (v1.96.0 or later)
- Node.js (v14.x or later)

---

## Development
To modify or extend the extension:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd jsx-new-section-gen
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile TypeScript:
   ```bash
   npm run compile
   ```
4. Launch the Extension Development Host:
   - Press `F5` in VS Code.

---

## Known Issues
- The extension does not support generating files outside of valid folder paths.
- Ensure you right-click a folder in the Explorer; otherwise, the command will not appear.

---

## Future Improvements
- Add configurable templates for `index.jsx` and `index.module.css`.
- Provide support for custom folder and file structures.
- Allow users to choose file extensions (e.g., `.tsx` for TypeScript).

---

## License
MIT License

