import React, { useState } from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isError, setIsError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setIsError({
                title: 'invalid input',
                message: 'Please enter a valid input!'
            })

            return;
        }
        if (+enteredAge < 1) {
            setIsError({
                title: 'invalid Age',
                message: 'Please enter a valid age (>0)'
            })

            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');


    }

    const userNameChangeHandler = (e) => {
        setEnteredUserName(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const ErrorHandler = () => {
        setIsError(null);
    }


    return (

        <div>
            {isError &&<ErrorModal title={isError.title} message={isError.message} onConfirm={ErrorHandler} />}
            <Card cssClass={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type="text"
                        onChange={userNameChangeHandler}
                        value={enteredUserName}>
                    </input>
                    <label htmlFor='age'>Age</label>
                    <input
                        id='age'
                        type='number'
                        onChange={ageChangeHandler}
                        value={enteredAge}>
                    </input>
                    <Button type='submit' >Add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;