import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>Search What You Want:</p>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Search..."
      ></input>
    </div>
  );
};

export default Search;
