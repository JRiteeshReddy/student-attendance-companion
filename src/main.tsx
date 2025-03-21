
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import App from './App.tsx'
import './index.css'

console.log("Application starting...");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
