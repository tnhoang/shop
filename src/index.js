import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./components/globalStyles";
import "antd/dist/antd.css";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
