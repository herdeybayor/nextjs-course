import React from "react";
import axios from "axios";

import { CardList, Scroll, SearchBox, ErrorBoundary } from "../components";
import "./App.css";

function App() {
    const [robots, setRobots] = React.useState<IUser[]>([]);
    const [searchField, setSearchField] = React.useState("");

    React.useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setRobots(response.data));
    }, []);

    const onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        setSearchField(event.currentTarget.value);
    };

    const filteredRobots = React.useMemo(
        () =>
            robots.filter((robot) =>
                robot.name.toLowerCase().includes(searchField.toLowerCase())
            ),
        [robots, searchField]
    );

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox
                searchField={searchField}
                searchChange={onSearchChange}
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

export default App;
