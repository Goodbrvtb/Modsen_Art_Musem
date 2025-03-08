import { Component, ErrorInfo, ReactNode } from 'react';

import { Title } from '../title/';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}
class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: null,
  };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <div>
          <Title
            title={
              <>
                <span>{error.message}</span>
              </>
            }
          />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
