import { createContext } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
export const data = createContext();

const Home = () => {
  return (
    <div>
      <p>this is home</p>
      <data.Provider value={"pobi"}>
        <Header></Header>
        <Outlet></Outlet>
      </data.Provider>
    </div>
  );
};

export default Home;
