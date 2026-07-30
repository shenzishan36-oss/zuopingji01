import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    this.setState({ info });
    console.error("React render error:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <main className="runtime-error">
          <p className="mono">runtime.error</p>
          <h1>React render failed</h1>
          <pre>{String(this.state.error?.stack || this.state.error?.message || this.state.error)}</pre>
          {this.state.info?.componentStack ? <pre>{this.state.info.componentStack}</pre> : null}
        </main>
      );
    }

    return this.props.children;
  }
}
