import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { About, Home } from "./pages";
import {BookDetails, BookList} from "./component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="book" element={<BookList/>}/>
        <Route path="/book/:id" element={<BookDetails/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
