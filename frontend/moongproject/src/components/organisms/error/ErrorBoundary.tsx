import React from "react";

import ErrorBoundaryCatch from "./ErrorBoundaryCatch";
import ErrorPage from "./ErrorPage";

const ErrorBoundary = ErrorBoundaryCatch(function ErrorBoundary(props: { children: React.ReactNode }, error?: Error) {
  if (error == null) {
    return <>{props.children}</>;
  }

  return <ErrorPage />;
});

export default ErrorBoundary;
