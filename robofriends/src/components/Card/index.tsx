import React from "react";

interface Props {
    id: number;
    name: string;
    email: string;
}

const Card = ({ id, name, email }: Props) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5 ">
            <img
                src={`https://robohash.org/${id}?size=200x200`}
                alt="robot-avatar"
            />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
