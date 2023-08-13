import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Theme appearance="dark">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Theme>
);
