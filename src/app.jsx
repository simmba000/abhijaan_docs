import { Suspense } from "solid-js";
import "./app.css";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import Layout from "./components/Layout";
import Home from "./routes";

export default function App() {

  // return (
  //   <Routes root={App}>
  //     <Layout>
  //       <Route path="/" component={Home} />
  //     </Layout>
  //   </Routes>
  // );

  return (
    <Router root={props=> (
        <Suspense>
          <Layout>
            {props.children}
          </Layout>
        </Suspense>
    )}>
      <FileRoutes />
    </Router>
  );
}