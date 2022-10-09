import React from "react";

import styles from "./Banner.module.css";

interface Props {
    handleOnClick: () => void;
    buttonText: string;
}

function Banner({ handleOnClick, buttonText }: Props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Coffee</span>{" "}
                <span className={styles.title2}>Connoisseur</span>
            </h1>
            <p className={styles.subTitle}>
                Discover your local coffee stores!
            </p>
            <button className={styles.button} onClick={handleOnClick}>
                {buttonText}
            </button>
        </div>
    );
}

export default Banner;
