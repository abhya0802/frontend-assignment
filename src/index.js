import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";

const AppPreview = lazy(() => import("./App"));
const domNode = document.getElementById("container");
const root = createRoot(domNode);
root.render(
  <Suspense fallback={<div>Loading</div>}>
    <AppPreview />
  </Suspense>
);
