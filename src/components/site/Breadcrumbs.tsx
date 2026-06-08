import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface Crumb {
  name: string;
  path: string;
}

/** Visual breadcrumbs. Pair with buildBreadcrumb() for the JSON-LD in head(). */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <Breadcrumb className="mx-auto max-w-7xl px-6 pt-28 sm:pt-32">
      <BreadcrumbList>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <BreadcrumbItem key={c.path}>
              {last ? (
                <BreadcrumbPage>{c.name}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink href={c.path}>{c.name}</BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
