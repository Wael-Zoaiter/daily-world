import React, { Component } from 'react';
import { MDBContainer, MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';
import { connect } from 'react-redux';
import { LatestNewsAction } from '../actions';
import Spinner  from '../components/Spinner';

class Navs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'Arts'
        }
        this.props.newsAction(this.state.activeItem);
    }

    toggleNav = nav => {        
        this.setState({
            activeItem: nav
        }, () => this.props.newsAction(this.state.activeItem));
        
        this.forceUpdate();
    }

    render() {        
        return (
            <MDBContainer>
                <MDBNav pills className="nav-justified">
                    {
                        this.props.sections.map((name, index) => {
                            return  (
                                <MDBNavItem key={index}>
                                    <MDBNavLink 
                                        to="#" 
                                        className={this.state.activeItem === name ? 'active' : ''} // + (this.props.spinner ? ' loading' : '')
                                        onClick={() => this.toggleNav(name)}
                                    >{(this.state.activeItem === name && this.props.spinner) ? <Spinner /> : name}</MDBNavLink>
                                </MDBNavItem>
                            )
                        })
                    }
                </MDBNav>
            </MDBContainer>
        )
    }
}

const mapStateToProps = (state) => {    
    return {
        spinner: state.spinner.spinner
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        newsAction: (section) => dispatch(LatestNewsAction(section))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Navs);