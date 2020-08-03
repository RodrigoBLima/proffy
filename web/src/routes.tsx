import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList";
import Landing from "./pages/Landing";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/give-classes" component={TeacherForm}></Route>
      <Route path="/study" component={TeacherList}></Route>
    </BrowserRouter>
  );
}
