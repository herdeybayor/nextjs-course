import Card from ".";

interface Props {
    robots: IRobot[];
}

function CardList({ robots }: Props) {
    return (
        <>
            {robots.map(({ id, name, username, email }) => (
                <Card key={id} id={id} name={name} email={email} />
            ))}
        </>
    );
}

export default CardList;
