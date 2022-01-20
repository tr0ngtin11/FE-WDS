import React from 'react';
import Navbar from '../components/Navbar';

const book = {
    title: 'Con meo',
    coverImage: 'https://salt.tikicdn.com/cache/w1200/ts/product/8a/ac/49/e3f43953a1979fcb674dfdeffd05dfad.png',
    price: 50000,
    description: 'Con meo ne'
}

const Book = () => {
    const { title, coverImage, price, description } = book;
    return (
        <div>
            <Navbar/>
            <div>
                <img src={coverImage} />
                <div>
                    <h1>{title}</h1>
                    <p>{price}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Book;
