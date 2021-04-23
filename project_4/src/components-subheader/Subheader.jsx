import React from 'react';
import styles from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/components-subheader/Subheader.module.css';

const Subheader = (props) => {
   return <div className = {styles.subheader} >
                    <div className = {styles.subheaderContainer} >
                        {props.children}
                        <h1>TEST</h1>
                    </div>
                
             </div>
   
};

export default Subheader;