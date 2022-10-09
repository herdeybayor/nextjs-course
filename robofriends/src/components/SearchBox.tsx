interface Props {
    searchField: string;
    searchChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

function SearchBox({ searchField, searchChange }: Props) {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots..."
                onChange={searchChange}
                value={searchField}
            />
        </div>
    );
}

export default SearchBox;
