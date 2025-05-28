import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./Header.jsx";
import Landing from "./Landing.jsx";
import Results from "./Results.jsx";
import Footer from "./footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Landing />
    <Results />
    <Footer />
  </StrictMode>
);
