import React, { Component } from 'react';
//import HomePage from './HomePage';

class BookShelf extends Component {
    render() {
        console.log(this.props.matchingBooks)
        return <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {Array.isArray(this.props.books) && (
                        this.props.books.map((book, index) =>
                        <li key={index}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 170, backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (`url(https://dummyimage.com/128x170/4f4f4f/ffffff.jpg&text=No+Book+Art)`) }}></div>
                                    <div className="book-shelf-changer">
                                        <select value={book.shelf} onChange={(event) => this.props.updateShelf(book, event.target.value)}> 
                                            <option disabled>Move to...</option>
                                            <option className={(book.id === this.props.matchingBooks) ? (("currentlyReading" === this.props.matchingShelf) ? 'shelfHighlight' : '') : ''} value="currentlyReading">Currently Reading</option>
                                            <option className={(book.id === this.props.matchingBooks) ? (("wantToRead" === this.props.matchingShelf) ? 'shelfHighlight' : '') : ''} value="wantToRead">Want to Read</option>
                                            <option className={(book.id === this.props.matchingBooks) ? (("read" === this.props.matchingShelf) ? 'shelfHighlight' : '') : ''} value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{Array.isArray(book.authors) ? book.authors.join(', '): book.authors}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    }
}

export default BookShelf;