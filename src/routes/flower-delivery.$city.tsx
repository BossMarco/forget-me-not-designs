import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for the /flower-delivery/$city subtree. It must render <Outlet/>
// so the child routes — the city hub (index) and each city×occasion page —
// actually render. Page content lives in flower-delivery.$city.index.tsx and
// flower-delivery.$city.$occasion.tsx.
export const Route = createFileRoute("/flower-delivery/$city")({
  component: () => <Outlet />,
});
