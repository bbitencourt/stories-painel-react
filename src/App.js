import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import Routes from "./routes";

export default function App() {
  return (
    <BrowserRouter basename="/sambastories" forceRefresh>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}
