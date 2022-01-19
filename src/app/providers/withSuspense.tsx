import { Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

export const withSuspense = (component: () => React.ReactNode) => () => {
  return <Suspense fallback={<Spinner />}>{component()}</Suspense>;
};
