import React from "react";

import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            built with ❤ by herdeybayor || &copy; {new Date().getFullYear()}{" "}
            herdeybayor
        </div>
    );
}

export default Footer;
