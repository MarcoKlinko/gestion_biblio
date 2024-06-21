import React from "react";
import style from "./style.module.css";

const bookList = [
    { id: 1, name: "book1", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 2, name: "book2", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 3, name: "book3", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 4, name: "book4", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 5, name: "book5", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 5, name: "book5", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 5, name: "book5", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 5, name: "book5", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 5, name: "book5", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 5, name: "book5", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
]

const BookPage = () => {
    
    return <div classNameName="container-fluid">
        <div className="row gap-1 p-5">
        {
            bookList.map( book => 
                <div className={`col-3 ${style.card__wrapper} my-2`}>
                    <div className="card">
                        <img src={book.imgUrl} className="card-img-top image-fluid" alt={book.name} />
                        <div className="card-body">
                            <h5 className="card-title text-center">{book.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            )
        }
         </div>
    </div>
}

export default BookPage;