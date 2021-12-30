import { useEffect, useState } from 'react';
import Edit from './EditBtn';
import Delete from './DeleteBtn';
import styles from './Home.module.css';
import EditModal from './EditModal';
import { getAllBlogsApi, editBlogApi, deleteBlogApi } from '../Apis/index';

const Home = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [editModalState, setEditModalState] = useState();
    
    useEffect(()=>{
        getAllBlogs();
    },[]);

    const getAllBlogs = () => {
        getAllBlogsApi('http://localhost:4000/blog')
        .then((data)=> {setAllBlogs(()=>data); console.log(data)})
        .catch((err)=> console.log('Error is ', err))
    }

    const editBlog = (id, title, body)=>{
        console.log("id ", id);
        editBlogApi('http://localhost:4000/blog',id, title, body).then(() =>{
            getAllBlogs();
            setEditModalState('');
        }).catch((err) => console.log('Error is ', err))
    }

    const deleteBlog = (id) => {
        console.log(id);
        deleteBlogApi(`http://localhost:4000/blog/${id}`)
        .then((res)=>{
            console.log("Done ", res);
            getAllBlogs();
        }).catch(err => console.log("error ",err));
    }
    return (
        <>
            <div className={styles.home}>
                <header className={styles.heading}> Welcome to the blogging website </header>
            </div>
            <div className={styles.blogsContainer}>
                <div className={styles.blogs}>
                    {allBlogs.length > 0 && allBlogs.map((blog)=>(
                        <div className={styles.blog} key={blog._id}>
                            <div className={styles.title}>
                                {blog.title}
                            </div>
                            <div className={styles.body}>
                                {blog.body}
                            </div>
                            <div className={styles.footer}>
                                <Edit editBlog={() => setEditModalState(blog)}/>
                                <Delete onDelete={() => deleteBlog(blog._id)}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {editModalState && <EditModal editModalState={editModalState} hide={editModalState?false:true} onEdit={editBlog} shuffleEditModal={()=>setEditModalState('')} />}
        </>
    )
}
export default Home;