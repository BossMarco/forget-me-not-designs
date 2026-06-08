import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for the /shop subtree. Renders <Outlet/> so the shop index
// (shop.index.tsx) and category pages (shop.$category.tsx) render correctly.
export const Route = createFileRoute("/shop")({
  component: () => <Outlet />,
});
