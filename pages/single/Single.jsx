import { useState } from "react";
import Home from "./home/Home.jsx";
import Login from "./login/Login.jsx";
import List from "./list/List.jsx";
import New from "./new/New.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Single() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route path="new" element={<New />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Single;