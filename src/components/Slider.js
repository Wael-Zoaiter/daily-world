import React, { Component } from 'react';
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";

class Slider extends Component {
    sliderItems = () => {
        return this.props.items.map((item, index) => {
            return (
                <CarouselItem key={index} itemId={index + 1}>
                    <View>
                        <img className="d-block w-100" src={`/images${item.img}`} alt={item.title} />
                        <Mask overlay="mask" />
                    </View>
                    <CarouselCaption>
                        <h3 className="h3-responsive">{item.title}</h3>
                        <p>{item.caption}</p>
                    </CarouselCaption>
                </CarouselItem>
            )
        })
    }

    render() {
        return (
            <section className="slider-section">
                <Carousel activeItem={1} length={3} showControls={true} showIndicators={false}>
                    <CarouselInner>
                        {
                            this.sliderItems()
                        }
                    </CarouselInner>
                </Carousel>
            </section>
        )
    }
}

export default Slider;