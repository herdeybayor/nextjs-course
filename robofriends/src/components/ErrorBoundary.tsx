import React from "react";

type Props = {
    children: React.ReactNode;
};

type State = {
    hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. That is not good</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
