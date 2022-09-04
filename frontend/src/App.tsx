import React from "react";

import { Navmenu, Header, Posts, Post, Footer } from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navmenu />
      <Header />
      <Post />
      <Posts />
      <Footer />
    </div>
  );
};

export default App;
