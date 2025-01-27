// function customFetch(url) {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()
//         request.addEventListener("readystatechange", () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 resolve(JSON.parse(request.response))
//             } else if (request.readyState === 4) {
//                 reject("Ma'lumot olishda xatolik yuz berdi!")
//             }
//         })
//         request.open("GET", url)
//         request.send()
//     })
// }

// customFetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((data) => {
//         console.log("users:", data);
//         return customFetch("https://jsonplaceholder.typicode.com/posts/1")
//     })
//     .then((data) => {
//         console.log("posts", data);
//         return customFetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//     })
//     .then((data) => {
//         console.log("comments:", data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Nima bo'sayam response keldi!");
//     })

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(data => data.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log("Finally ishladi"))


// getData("./db.json", (data, error) => {
//     console.log(data);
//     getData("./posts.json", (posts, error) => {
//         console.log(posts);

//         getData("https://jsonplaceholder.typicode.com/posts/1/comments", (comments, error) => {
//             console.log(comments);

//             getData("https://jsonplaceholder.typicode.com/posts/1/comments", (comments, error) => {
//                 console.log(comments);

//                 getData("https://jsonplaceholder.typicode.com/posts/1/comments", (comments, error) => {
//                     console.log(comments);

//                     getData("https://jsonplaceholder.typicode.com/posts/1/comments", (comments, error) => {
//                         console.log(comments);

//                         getData("https://jsonplaceholder.typicode.com/posts/1/comments", (comments, error) => {
//                             console.log(comments);
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })



// let vada = true


// const promise = new Promise((resolve, reject) => {
//     if (vada) {
//         resolve("Ovqat pishdi");
//     } else {
//         reject("Ovqat o'xshamadi pitsa zakaz qilamiz!");
//     }
// })


// promise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Qorin to'ydi!");
//     })


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, 'two');
// });

// const values = Promise.race([promise1, promise2])

// values
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })



const list = document.getElementById("list")
async function getData() {
    const dataJSON = await fetch(`https://api.github.com/users/${input.value}`)
    const data = await dataJSON.json()
    // const postsJSON = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    // const posts = await postsJSON.json()
    // const commentsJSON = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    // const comments = await commentsJSON.json()

    return data
}

getData()
    .then(data => {
        data.map((item) => {
            const li = document.createElement("li")

            li.innerHTML = item.name + " " + item.phone

            list.append(li)
        })
    })
    .catch((error) => {
        console.log("error:", error);
    })