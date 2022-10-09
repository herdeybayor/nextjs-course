import React from "react";
import axios from "axios";

import { CardList, Scroll, SearchBox, ErrorBoundary } from "../components";
import "./App.css";

interface State {
    robots: IRobot[];
    searchField: string;
}

class App extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            robots: [],
            searchField: "",
        };
    }

    componentDidMount(): void {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => this.setState({ robots: res.data }));
    }

    onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        this.setState({ searchField: event.currentTarget.value });
    };

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter((robot) =>
            robot.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox
                    searchField={searchField}
                    searchChange={this.onSearchChange}
                />
                {!robots.length ? (
                    <h1>Loading</h1>
                ) : (
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                )}
            </div>
        );
    }
}

export default App;
