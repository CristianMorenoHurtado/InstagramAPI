import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home = ({ users, setUsers }) => {
    const max = 50

    const [limit, setLimit] = useState(10)

    const getUser = async () => {
        try {
            const { data } = await axios
                ({
                    url: "https://dummyapi.io/data/v1/post?limit=50",
                    method: "get",
                    headers: {
                        "app-id": "61a3c64d6e4b20212a2e5e7a",
                    }
                })
            console.log(data)
            setUsers(data.data)

        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        getUser()
    }, [limit])

    const handleShowMoreUsers = () => {
        if (limit <= max) {
            setLimit(limit + 5);
        }
    };

    const likes = document.querySelectorAll('.heart__icon')
    let count = document.querySelector('#user__likes--count')
    let isLiked = false

    likes.forEach((like) => {
        function likeListener() {
            if (!isLiked) {
                isLiked = true
                count.textContent++
                like.classList += ' heart__red'
                console.log('ADDING LIKE')
            } else {
                isLiked = false
                like.classList.remove('heart__red')
                count.textContent--
                console.log('REMOVING LIKE')
            }
        }


        like.addEventListener('click', likeListener)
    })



    return (
        users.length > 0 ? (
            <div className="container">
                <div className="feed">
                    <ul>
                        {users.map((user) => (
                            <div className="user">
                                <div className="username__header">
                                    <img className="user__thumbnail" src={user.owner.picture} key={user.id} alt="" />
                                    <span>{user.owner.firstName} {user.owner.lastName}</span>
                                </div>
                                <img className="user__photo" src={user.image} key={user.id} alt=""/>
                                <div className="user__likes">
                                    <span id="user__likes--count" className="user__likes--number" >
                                        {user.likes}
                                    </span>
                                    <span>likes</span>
                                </div>
                                <p className="user__title" ><b>{user.owner.firstName} {user.owner.lastName}</b> {user.text}</p>
                            </div>
                        )).slice(0, limit)}
                    </ul>
                    <button className="btn" onClick={handleShowMoreUsers}>Load More</button>
                </div>
            </div>
        ) : (
            <div className="container">
                <FontAwesomeIcon className="spinner" icon="spinner" />
            </div>
        )
    )


    
}

export default Home
