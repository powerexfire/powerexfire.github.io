import { Component, type ReactNode } from "react";
import { ShieldAlert } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground px-4">
          <div className="text-center max-w-md">
            <ShieldAlert className="w-16 h-16 text-primary mx-auto mb-6" aria-hidden="true" />
            <h1 className="font-heading text-3xl font-bold mb-3">Something went wrong</h1>
            <p className="text-secondary-foreground/70 mb-8">
              An unexpected error occurred. Please refresh the page and try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-bold hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary-foreground outline-none"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
