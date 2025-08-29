import React, { useState } from "react";
import styles from "../static/css/ClubsPage.module.css";
import { getTabData } from "../scripts/Clubs";

function ClubsPage() {
  // Track which tab is active
  const [activeTab, setActiveTab] = useState(1);

  // Load content for active tab from script.js
  const tabContent = getTabData(activeTab);

  return (
    <div className={styles.pagewrap}>
      {/* Tabs */}
      <div className={styles.tab_bar}>
        <div
          className={`${styles.btn} ${activeTab === 1 ? styles.active : ""}`}
          onClick={() => setActiveTab(1)}
        >
          DEPARTMENT CLUBS
        </div>
        <div
          className={`${styles.btn} ${activeTab === 2 ? styles.active : ""}`}
          onClick={() => setActiveTab(2)}
        >
          GENERAL CLUBS
        </div>
        <div
          className={`${styles.btn} ${activeTab === 3 ? styles.active : ""}`}
          onClick={() => setActiveTab(3)}
        >
          OTHER CLUBS
        </div>
      </div>

      {/* Content */}
      <div className={styles["content-container"]}>
        <div className={`${styles.content} ${styles.active}`}>
          <h1>{tabContent.title}</h1>
          <p>{tabContent.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ClubsPage;
