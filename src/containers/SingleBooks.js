import React from 'react';
import Reveal from 'react-reveal';

const SingleBooks = props => {    
    const book = props.location.state && props.location.state;    
    return (
        <div className="single-card">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Reveal effect="animated zoomIn">
                        <div className="card">
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.subtitle} />
                            <div className="card-body">
                                <div className="card-header">
                                    <h6 className="card-title">{book.volumeInfo.title}</h6>
                                </div>
                                <p className="card-text">{book.volumeInfo.description}</p>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-6">
                                        <span className="author">{book.volumeInfo.authors.join(', ')}</span>
                                    </div>
                                    <div className="col-6">
                                        <span className="tags">{book.volumeInfo.categories.join(', ')}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <span className="author">{book.volumeInfo.publishedDate}</span>
                                    </div>
                                    <div className="col-6">
                                        <span className="tags">{book.volumeInfo.pageCount} page</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SingleBooks;