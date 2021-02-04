import { Suspense } from "react";

import ApplicationRouter from "router/ApplicationRouter";
import AuthenticationProvider from "context/Authentication/provider";

function App() {
  return (
    <Suspense fallback={<></>}>
      <AuthenticationProvider>
        <ApplicationRouter />
      </AuthenticationProvider>
    </Suspense>
  );
}

export default App;
