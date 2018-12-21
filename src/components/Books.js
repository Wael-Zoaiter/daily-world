import React, { Component } from 'react';
import Reveal from 'react-reveal';
import { Carousel, CarouselInner, CarouselItem, Row, Card, CardImage, CardBody } from "mdbreact";
import { emptyCards } from '../utilities';
import { Link } from 'react-router-dom';

class Books extends Component {

    booksStructure = (from, to) => {
        return this.props.books ? this.props.books.items.slice(from, to).map((book, index) => {            
            return (
                <div key={index} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <Link to={{pathname: `/books/${book.id}`, state: book}}>
                    <Card>
                        <CardImage className="img-fluid" src={book.volumeInfo.imageLinks.thumbnail} />
                        <CardBody>
                            <h6 className="card-title">{book.volumeInfo.title}</h6>
                        </CardBody>
                    </Card>
                    </Link>
                </div>
            )
        }) : null;
    }

    render() {
        let books1 = null,
            books2 = null;
        if (!this.props.books) {
            books1 = emptyCards(4, 'col-lg-3 col-md-3 col-sm-6 col-xs-12');
            books2 = emptyCards(4, 'col-lg-3 col-md-3 col-sm-6 col-xs-12');
        } else {
            books1 = this.booksStructure(0,4);
            books2 = this.booksStructure(4,8);
        }
        
        return (
            <div className="books">
                <div className="container-fluid">
                    <Reveal effect="animated fadeIn">
                        <h2>books</h2>
                        <Carousel
                            activeItem={1}
                            length={2}
                            slide={true}
                            showControls={false}
                            showIndicators={true}
                            multiItem
                            >
                            <CarouselInner>
                                    <CarouselItem itemId={1}>
                                        <Row>
                                            {books1}
                                        </Row>
                                    </CarouselItem>
                                    <CarouselItem itemId={2}>
                                        <Row>
                                            {books2}
                                        </Row>
                                    </CarouselItem>
                            </CarouselInner>
                        </Carousel>
                    </Reveal>
                </div>
            </div>
        )
    }
}

export default Books;