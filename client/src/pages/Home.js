import React from 'react';
import SearchTask from '../components/SearchTask';
import Task from '../components/Task';
import styles from '../styles/modules/home.module.scss';

const Home = () => {
    const exampleArray = [
        {title: '讚',
        desc: "test",
        img: "https://images.unsplash.com/photo-1677136522008-107c1e8ab6ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        id: 123},
        {title: '249旅',
        desc: "test",
        img: "https://images.unsplash.com/photo-1677136522008-107c1e8ab6ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        id: 124},
        {title: "打遊戲",
        img: "https://images.unsplash.com/photo-1677136522008-107c1e8ab6ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        desc: "test",
        id: 125}];
    return (
        <div className={styles.home}>
            <h1>Github Task Management</h1>
            open in progress done 
            <SearchTask></SearchTask>
            {exampleArray.map(task => {
                return <Task key={task.id} task={task}></Task>
            })}
        </div>
    );
};

export default Home;