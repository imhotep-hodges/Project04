import React from 'react';
import styles from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/components-header/Header.module.css';
import minion1_tpt from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/assets/minion1_tpt.png';

const Header = () => {
    return <header>
    <div className='logoContainer'>
        <img src={minion1_tpt} alt='minionlogo' className='logo' height='40px' width='40px' />
        <span> MINION </span>
    </div>
    
    <div className='userContainer'>
        <div className='user'> User </div>

    </div>
    
    </header>;
};

export default Header;