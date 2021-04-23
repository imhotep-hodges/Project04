import React from 'react';
import styles from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/ExchangeList/ExchangeList.module.css';


const ExchangeList = (props) => {
    const renderListItems = () => {
        return props.exchanges.map(exchange => {
            return <li className={styles.listItem}>
                    <div className={styles.dot} />

                    <div className={styles.name}> {exchange.name} </div>

                    <div classname={styles.index}> {exchange.index} </div>

                    <div className={styles.percentage}> {exchange.change} </div>
                    </li>
        });

    };

    return <div className={styles.container}>
                <h1 className={styles.header}>Exchanges</h1>
                    <ul className={styles.exchangeList}>
                        {renderListItems()}

                    </ul>


            </div>

};

export default ExchangeList;