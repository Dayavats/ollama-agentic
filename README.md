# Agentic AI - React Chat App

A modern, Materialize/React-based chat UI for interacting with your local AI agent.

## Features
- Modern chat interface with sidebar navigation
- Connects to a backend AI agent (default: http://localhost:3001/ask)
- Responsive and user-friendly design

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Backend AI agent running at `http://localhost:3001/ask` (see below)

## Installation

1. **Clone the repository** (if you haven't already):
   ```sh
   git clone <your-repo-url>
   cd AGENTIC/agent-ui
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

## Backend Setup
- This app expects a backend AI agent running at `http://localhost:3001/ask`.
- You can use the provided backend in the main project directory or your own implementation.

## Usage
- Type your message in the input box and press **Send** or hit **Enter**.
- The agent will respond in the chat window.
- Use the sidebar to navigate (Home, Memory, Settings).

## Troubleshooting
- **Material Icons not showing?**
  - Add this line to your `public/index.html` inside `<head>`:
    ```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    ```
- **CORS/network errors?**
  - Make sure your backend is running and accessible at `http://localhost:3001/ask`.
  - Check your browser console for error messages.
- **Port conflicts?**
  - Change the port in `package.json` or start the app with a different port:
    ```sh
    PORT=3002 npm start
    ```

## Customization
- You can modify the UI in `src/App.js` and styles in `src/App.css`.
- Sidebar icons use [react-icons](https://react-icons.github.io/react-icons/).

## License
MIT
