import { useState } from "react";
import Login from "./login/Login.jsx";
import List from "./list/List.jsx";
import Single from "./single/Single.jsx";
import New from "./new/New.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
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

export default Home;