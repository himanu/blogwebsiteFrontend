import { useState } from 'react';
import { addBlogApi } from '../Apis';
import styles from './Addblog.module.css';
const Addblog = ({body, title, setTitle, setBody}) => {
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addBlogApi('http://localhost:4000/blog', title, body)
        .then((res)=>{
            setTitle('');
            setBody('');
            if(res.status === 205) {
                throw new Error("Please change the title");
            }
            return res.json();
        })
        .then((res)=>{
            console.log("Done ",res);
        })
        .catch((err)=>{
            setError(err.message);
            console.log("Error exist ", err.message);
        })
    }

    return (
        <div className={styles.addBlog}>
            <header className={styles.heading}> Add your own blog </header>
            <form className={styles.form} onSubmit={handleSubmit} method="post">
                <input className={styles.input} type="text" name="title" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <textarea className={styles.textarea} type="text" name="body" placeholder='Tell your story...' value={body} onChange={(e) => setBody(e.target.value)} required/>
                <button className={styles.submitBtn} type="submit" disabled={!title || !body}> Add Blog </button>
            </form>
            <div className={styles.error}> {error} </div>
        </div>
    )
}

export default Addblog;