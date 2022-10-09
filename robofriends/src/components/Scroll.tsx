import React from "react";

interface Props {
    children: React.ReactNode;
}

function Scroll({ children }: Props) {
    return (
        <div
            style={{
                overflowY: "scroll",
                border: "1px solid black",
                height: "500px",
            }}
        >
            {children}
        </div>
    );
}

export default Scroll;
