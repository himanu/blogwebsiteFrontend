export const addBlogApi = (url, title, body) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            body: body
        })
    }
    return fetch(url, options);
}

export const getAllBlogsApi = (url) => {
    return new Promise(async(full,rej)=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            full(data);
        } catch(err) {
            rej(err);
        }
    });
}

export const editBlogApi = (url, id, title, body) => {
    return new Promise( async(full, rej)=>{
        const obj = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                title,
                body
            })
        }
        try {
            const res = await fetch(url, obj);
            full(res);
        } catch(err) {
            rej(err);
        }
    })
}

export const deleteBlogApi = (url) => {
    return new Promise(async(full, rej)=>{
        try {
            const data = await fetch(url,{
                method: 'DELETE'
            });
            full(data);
        } catch(err) {
            rej(err);
        }
    })
}