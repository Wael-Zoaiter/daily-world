import React from 'react';
import Reveal from 'react-reveal';

const SingleNews = props => {    
    const item = props.location.state.article && props.location.state.article;    
    return (
        <div className="single-card">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Reveal effect="animated pulse">
                        <div className="card">
                            <img 
                                className="card-img-top" 
                                src={item.media[0]['media-metadata'][2].url} 
                                alt={item.media[0]['media-metadata'][2].format}
                                style={{
                                    width: item.media[0]['media-metadata'][2].width,
                                    height: item.media[0]['media-metadata'][2].height,
                                    margin: "0 auto"
                                }}
                            />
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <p className="card-text">{item.abstract}</p>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-md-3">{item.byline}</div>
                                    <div className="col-md-3">Section: {item.section}</div>
                                    <div className="col-md-3">Source: <a href={item.url}>{item.source}</a></div>
                                    <div className="col-md-3">Date: {item.published_date}</div>
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

export default SingleNews;