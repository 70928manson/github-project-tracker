import React from 'react';
import styles from '../styles/modules/task.module.scss';

const Task = ({ task }) => {
    return (
        <div className={styles.task}>
            <div>
                <img src={task.img} alt="user" className={styles.img} />
                <span className={styles.title}>{task.title}</span>
            </div>
            <p className={styles.desc}>
                {task.desc}
            </p>
            edit
            delete
        </div>
    );
};

export default Task;