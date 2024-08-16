import React from "react";
import style from "./style.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const bookList = [
    { id: 1, name: "book1", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 2, name: "book2", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 3, name: "book3", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 4, name: "book4", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
    { id: 5, name: "book5", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MmZsXpsy4zN3ezEZ4O8JfgwnthKeMogyRA&s"},
]

const BookPage = () => {

    document.title = "Books"
    
    return <div className={`container ${style.book_wrapper}`}>
        <div className="row">
        {
            bookList.map( book => 
                <div key={book.id} className={`col-md-4 col-lg-3 ${style.card__wrapper} my-2`}>
                    <div className={`${style.bookCard} bg-info`}>
                        <img src={book.imgUrl} className="card-img-top image-fluid" alt={book.name} />
                        <div className="card-body">
                            <h5 className="card-title text-center">{book.name}</h5>
                            <p className="card-text">Some quick example .</p>
                        </div>
                    </div>
                </div>
            )
        }
        </div>
        <div className={`${style.asideBook}`}>
            <div className={`${style.bookSearch}`}>
                <input type="text" placeholder="Search"/>
                <div className={`bg-info ${style.search}`}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            <ul className={style.categoriyList}>
                <li>
                    <a href="">Caterory 1</a>
                </li>
                <li>
                    <a href="">Caterory 2</a>
                </li>
                <li>
                    <a href="">Caterory 3</a>
                </li>
                <li>
                    <a href="">Caterory 4</a>
                </li>
                <li>
                    <a href="">Caterory 5</a>
                </li>
            </ul>
        </div>
    </div>
}

export default BookPage;