import React from "react";

import "./style.css";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route } from "react-router";
import DisplayUsers from "./Components/DisplayUsers";
import Header from "./layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RegisterPage />}>
          {" "}
        </Route>
        <Route path="/user" element={<DisplayUsers />}>
          {" "}
        </Route>
      </Routes>

      {/* <Table className="center" >
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        <tr>
          <td>1</td>
          <td>onkar</td>
          <td>patil</td>
        </tr>
      </Table> */}
    </>
  );
};
