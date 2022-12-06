import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContexProvider } from "./context/authContext";
// import { OrderContextProvider } from "./context/orderContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContexProvider>
      {/* <OrderContextProvider> */}
        <App />
      {/* </OrderContextProvider>       */}
    </AuthContexProvider>
  </React.StrictMode>
);