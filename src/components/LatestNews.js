import React, { Component } from 'react';
import Reveal from 'react-reveal';
import { emptyCards } from '../utilities';
import Navs from '../containers/Navs';
import { Link } from 'react-router-dom';

class LatestNews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    showMore = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }));
    }

    articlesStructure = (from, to) => {
        return this.props.latestArticles.results ? this.props.latestArticles.results.slice(from, to).map((article, index) => {
            return (
                <div key={article.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Reveal effect="animated fadeIn">
                    <Link to={{pathname: `/news/${article.id}`, state: {article}}}>
                    <div className="card">
                        <div className="card-header">
                            <h6 className="card-title">{article.title}</h6>
                        </div>
                        <img src={article.media[0]['media-metadata'][2].url} alt={article.media[0]['media-metadata'][2].format} />
                        <div className="card-body">
                            <p className="card-text">{article.abstract}</p>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-8">
                                    <span className="author">{article.byline}</span>
                                </div>
                                <div className="col-4">
                                    <span className="tags">{article.section}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <span className="source">{article.source}</span>
                                </div>
                                <div className="col-4">
                                    <span className="date">{article.published_date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                    </Reveal>
                </div>
            )
        }) : null
    }

    render() {
        let latestArticles = null;
        if (!this.props.latestArticles) {
            latestArticles = emptyCards(4, 'col-lg-3 col-md-4 col-sm-6 col-xs-12');
        } else {
            if (!this.state.show) {
                latestArticles = this.articlesStructure(0,4);
            } else {
                latestArticles = this.articlesStructure(0,20);
            }
        }
        const showButton = (
            <span className="show-more" onClick={this.showMore}>{!this.state.show ? 'Show more': 'Show less'}</span>
        )
        return (
            <div className="latest-news">
                <div className="container-fluid">
                    <Reveal effect="animated fadeIn">
                        <h2>Latest News</h2>
                        <Navs sections={this.props.navs}/>
                        <div className="row">
                            {
                                latestArticles
                            }
                            {
                                showButton
                            }
                        </div>
                    </Reveal>
                </div>
            </div>
        )
    }
}

export default LatestNews;