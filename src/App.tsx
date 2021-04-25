import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

import { memberList } from "./data/member-list";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title={"Membar List"} />
      {memberList.map((member) => {
        return <Card {...member} />;
      })}
    </div>
  );
};

export default App;
