import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ShieldAlert } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground px-4">
      <div className="text-center max-w-md">
        <ShieldAlert className="w-16 h-16 text-primary mx-auto mb-6" aria-hidden="true" />
        <h1 className="font-heading text-6xl font-bold mb-3">404</h1>
        <p className="text-lg text-secondary-foreground/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-bold hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary-foreground outline-none"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
