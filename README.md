# Ollama-Agentic

A full-stack AI chat application with a modern React frontend, Node.js backend, and local LLMs powered by Ollama. Easily chat with advanced models like TinyLlama and Mistral on your own machine.

---

## Features
- Modern chat interface (React)
- Node.js backend connects to Ollama for LLM responses
- Supports local models: TinyLlama, Mistral, and more
- Easy setup and configuration

---

## 1. Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- [Ollama](https://ollama.com/) (for running local LLMs)
- Git (for cloning and version control)

---

## 2. Ollama Installation & Model Setup

### Install Ollama
- Download and install Ollama from [https://ollama.com/download](https://ollama.com/download) for your OS.
- Follow the installation instructions for your platform.

### Pull LLM Models
Open a terminal and run:
```sh
ollama pull tinyllama
ollama pull mistral
# You can pull other models as needed
```
See more models at [https://ollama.com/library](https://ollama.com/library)

### Start Ollama
```sh
ollama serve
```
Ollama will listen on `http://localhost:11434` by default.

---

## 3. Backend Setup

1. **Navigate to the project root:**
   ```sh
   cd /path/to/ollama-agentic
   ```
2. **Install backend dependencies:**
   ```sh
   npm install
   ```
3. **Configure the backend to use your desired model:**
   - In your backend code (e.g., `agents.js`), set the model name (e.g., `tinyllama` or `mistral`).
   - Example:
     ```js
     const model = 'tinyllama'; // or 'mistral', etc.
     // Use this model in your Ollama API requests
     ```
4. **Start the backend server:**
   ```sh
   node agents.js
   ```
   The backend will run at [http://localhost:3001](http://localhost:3001).

---

## 4. Frontend Setup

1. **Navigate to the frontend directory:**
   ```sh
   cd agent-ui
   ```
2. **Install frontend dependencies:**
   ```sh
   npm install
   ```
3. **Start the React app:**
   ```sh
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

---

## 5. How to Use
- Type your message in the input box and press **Send** or hit **Enter**.
- The agent will respond in the chat window.
- Use the sidebar to navigate (Home, Memory, Settings).

---

## 6. Troubleshooting
- **Material Icons not showing?**
  - Add this line to your `public/index.html` inside `<head>`:
    ```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    ```
- **CORS/network errors?**
  - Make sure your backend is running and accessible at `http://localhost:3001/ask`.
  - Check your browser console for error messages.
- **Ollama/model errors?**
  - Make sure Ollama is running and the model is pulled.
  - Check that the model name in your backend matches the one you pulled.
- **Port conflicts?**
  - Change the port in `package.json` or start the app with a different port:
    ```sh
    PORT=3002 npm start
    ```

---

## 7. License
MIT
