import "./assets/global.css"
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./core/client.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./app/App.tsx";
import DefaultLayout from "./layouts/DefaultLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
      <DefaultLayout>
        <App />
      </DefaultLayout>
      <ReactQueryDevtools />
  </QueryClientProvider>
);
