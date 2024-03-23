import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
function Navbar() {
  const link = [{ id: 1, title: "info", url: "/info" }];
  return (
    <div>
      <div>
        <Link href="/info" className={styles.info}>
        Info
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
