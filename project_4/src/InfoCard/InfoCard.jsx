import React from 'react';

import styles from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/InfoCard/InfoCard.module.css'

const InfoCard = ({ title, stock, darkmode}) => {

   return ( 
    <div className={styles.infoCard}>
        <h1 className={styles.header}>{title}</h1>
        <div>
            <p className={styles.paragraph}>{stock.ticker}</p>
            <p className={styles.paragraph}>{stock.amount} TEST</p>
        </div>

    </div>
   );
};

export default InfoCard;