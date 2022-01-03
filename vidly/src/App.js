import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Rentals from "./components/Rentals";
import Customers from "./components/Customers";
import Error from "./components/Error";
import MoviesForm from "./components/MoviesForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/movies/:id" element={<MoviesForm />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/" element={<Navigate to="movies" />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="error" />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
