import toast from 'react-hot-toast';
import styles from './Input.module.css';
import React, { useRef, useState } from 'react'

interface InputProps {
    fetchUser : (username : string) => void;
}

const Input: React.FC<InputProps> = ({fetchUser}) => {
    const inputref = useRef<HTMLInputElement>(null);

    const [username, setUsername] = useState<string>("");


    // TODO: prevent default behaviour of reloading after submit btn clicked
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        inputref.current?.blur();
        
        if (username.trim().length < 1) {
            toast("Please Enter the Todo First!");
            return;
        }

        // createTodo(username);
        fetchUser(username);

        setUsername("");
    }


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }


    return (
        <form className={styles.inputForm} onSubmit={handleSubmit}>
            <input
                ref={inputref}
                type="text"
                placeholder='Enter Username'
                className={styles.input}
                onChange={handleInputChange}
                value={username}
            />
            <button
                type="submit"
                className={styles.btn}
                disabled={!username.trim()}
            >
                GO
            </button>
        </form>
    )
}

export default Input;