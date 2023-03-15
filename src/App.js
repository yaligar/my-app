import React, { useState } from "react";
import "./App.css";
import "./testhtml";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import LandingPge from "./managemetTool/landindPge";
import OrdersPage from "./managemetTool/ordersPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LandingPge />} />
        <Route path="/OrdersPage" element={<OrdersPage />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
