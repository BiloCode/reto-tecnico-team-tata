import { Suspense } from "react";
import ApplicationRouter from "router/ApplicationRouter";

function App() {
  return (
    <Suspense fallback={<></>}>
      <ApplicationRouter />
    </Suspense>
  );
}

export default App;
