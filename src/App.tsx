import React from "react";
import { Routes, Route } from "react-router-dom";
import { BookList, UpdateBook, CreateBook } from "components";
import { Navbar } from "shared";
import routes from "config/routes";

function App() {
  const { home, createBook, updateBook } = routes;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={updateBook} element={<UpdateBook />} />
        <Route path={createBook} element={<CreateBook />} />
        <Route path={home} element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
