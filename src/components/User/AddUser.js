import React from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {
    const addUserHandler = (e) => {
        e.preventDefault();
    }


    return (
        <Card cssClass={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type="text" required ></input>
                <label htmlFor='age'>Age</label>
                <input id='age' type='number' required ></input>
                <Button type='submit' >Add user</Button>
            </form>
        </Card>
    )
}

export default AddUser;