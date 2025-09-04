import { useEffect, useState } from "react";

type Route = {
  path: string;
  component: React.ReactNode;
  title?: string;
  description?: string;
};

type Props = {
  routes: Route[];
};

export default function Router({ routes }: Props) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  const route = routes.find((r) => r.path === currentPath);

  return route ? <>{route.component}</> : <h1>404 - Page Not Found</h1>;
}
