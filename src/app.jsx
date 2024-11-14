import { Suspense } from "solid-js";
import "./app.css";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import Layout from "./components/Layout";
import { ContextProvider } from "./contextAPI/context";
import LoadingOverlay from "./components/LoadingOverlay";

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
          <ContextProvider>
          <LoadingOverlay/>
            <Layout>
            
              {props.children}
            </Layout>
          </ContextProvider>
        </Suspense>
    )}>
      <FileRoutes />
    </Router>
  );
}