import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Singup/Singup";
import Login from "./Login/Login";
import Tasks from "./Tasks/Tasks";
import TaskAdd from "./Tasks/taskadd";
import Taskdelete from "./Tasks/tasksdelete";
import Taskedit from "./Tasks/taskedit";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/tasks" element={<Tasks />}></Route>
      <Route path="/taskadd" element={<TaskAdd />}></Route>
      <Route path="/taskdelete" element={<Taskdelete />}></Route>
      <Route path="/taskedit" element={<Taskedit />}></Route>
    </Routes>
  );
}

export default AppRoutes;
