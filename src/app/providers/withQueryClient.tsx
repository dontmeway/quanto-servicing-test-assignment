import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const withQueryClient = (component: () => React.ReactNode) => () => {
  return (
    <QueryClientProvider client={queryClient}>
      {component()}
    </QueryClientProvider>
  );
};
