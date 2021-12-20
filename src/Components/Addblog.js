import styles from './Addblog.module.css';
const Addblog = () => {
    return (
        <div className={styles.addBlog}>
            <header className={styles.heading}> Add your own blog </header>
            <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
                <input className={styles.input} type="text" name="title" id="title" placeholder='Title' required/>
                <textarea className={styles.textarea} type="text" name="body" id="body" placeholder='Tell your story...' required/>
                <button className={styles.submitBtn} type="submit"> Add Blog </button>
            </form>
        </div>
    )
}

export default Addblog;