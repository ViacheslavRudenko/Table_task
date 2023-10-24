import { FC, ReactElement } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Table from "../../Pages/Table/Table";

const Routing: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
};

export default Routing;
