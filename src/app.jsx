import { Suspense, createSignal } from "solid-js";
import "./app.css";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import Nav from "./components/Nav";

export default function App() {
  return (
    <Router root={props=> (
      <>
        <Nav/>
        <Suspense>{props.children}</Suspense>
      </>)}>
      <FileRoutes />
    </Router>
  );
}
