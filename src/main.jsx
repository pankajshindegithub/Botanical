// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import ScrollToTop from 'react-scroll-to-top';

import { Toaster } from "react-hot-toast";

// Your Clerk Publishable Key from .env
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        {/* Toast notifications */}
        <Toaster position="bottom-right" reverseOrder={false} />
        <App />
        <ScrollToTop color='white' smooth style={{backgroundColor:'#020202',  display:'flex', alignItems:'center', justifyContent:'center', width: '50px', height:'50px', borderRadius: "50%"}}/>

      </Provider>
    </ClerkProvider>
  </StrictMode>
);
