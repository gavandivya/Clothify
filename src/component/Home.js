import React from 'react'
import mainImg from '../assets/1221.jpg'

const Home = () => {
    return (
        <div className='hero'>
            <div class="card text-bg-dark border-0">
                <img src={mainImg} class="card-img" alt="..." />
                <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    )
}

export default Home