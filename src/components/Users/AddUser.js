import React, { useState, useRef } from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../helpers/Wrapper';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
   
   
    // const [enteredUserName, setEnteredUserName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [isError, setIsError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        const enteredName = (nameInputRef.current.value)
        const enteredUserAge = (ageInputRef.current.value)
        
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setIsError({
                title: 'invalid input',
                message: 'Please enter a valid input!'
            })

            return;
        }
        if (+enteredUserAge < 1) {
            setIsError({
                title: 'invalid Age',
                message: 'Please enter a valid age (>0)'
            })

            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        // setEnteredUserName('');
        // setEnteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';


    }

    // const userNameChangeHandler = (e) => {
    //     setEnteredUserName(e.target.value);
    // }

    // const ageChangeHandler = (e) => {
    //     setEnteredAge(e.target.value);
    // }

    const ErrorHandler = () => {
        setIsError(null);
    }
    
    return (

        <Wrapper>
            {isError && <ErrorModal title={isError.title} message={isError.message} onConfirm={ErrorHandler} />}
            <Card cssClass={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type="text"
                        // onChange={userNameChangeHandler}
                        // value={enteredUserName}
                        ref={nameInputRef}>
                    </input>
                    <label htmlFor='age'>Age</label>
                    <input
                        id='age'
                        type='number'
                        // onChange={ageChangeHandler}
                        // value={enteredAge}
                        ref={ageInputRef}>
                    </input>
                    <Button type='submit' >Add user</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;