import HeaderLogo from "./../assets/images/header-logo.png";
import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from 'react-dom';
import MessageSuccess from "./messageSuccess";

class Contacts extends React.Component{

    state = {
        isLoaded : true,
        name: '',
        subject: '',
        email: '',
        message: ''
    }

    async componentDidMount(){}

    handleSubmit(event){
        if(this.state.message.length < 5){
            alert("message too short!");
            return;
        }
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: this.state.name, subject: this.state.subject, email: this.state.email, message: this.state.message})
        };
        fetch('/message', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }))
            .then(ReactDOM.render(<MessageSuccess email={this.state.email} subject={this.state.subject} name={this.state.name}/>, document.getElementById('messageForm')));
    }

    render(){
        if(this.state.isLoaded)
        return(
            <React.Fragment>
                {/* NAVBAR */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                <Link className="navbar-brand" to="/"><img height={26} src={HeaderLogo} alt=""/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products"> Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>  
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">Contact Us</Link>
                    </li>
                    </ul>
                </div>
                </div>
                </nav>

                {/* CONTACT PAGE */}
                <div className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <div className="line-dec"></div>
                                <h1>Contact Us</h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="map">
                                <iframe title="map-1" className="iframeClass" src="https://whereismap.net/wp-content/uploads/2019/10/Where-is-Bitola-Located-What-Country-is-Bitola-in-Bitola-Map.jpg" width="100%" height="500px" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="container">
                                    <form id="messageForm" onSubmit={(event) => this.handleSubmit(event)}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <fieldset>
                                                    <input value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} name="name" type="text" className="form-control" id="name" placeholder="Your name..." />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-6">
                                                <fieldset>
                                                    <input required value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} name="email" type="text" className="form-control" id="email" placeholder="Your email..." />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-12">
                                                <fieldset>
                                                    <input value={this.state.subject} onChange={(event) => this.setState({subject: event.target.value})} name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-12">
                                                <fieldset>
                                                    <textarea required value={this.state.message} onChange={(event) => this.setState({message: event.target.value})} name="message" rows="6" className="form-control" id="message" placeholder="Your message..."></textarea>
                                                </fieldset>
                                            </div>
                                            <div className="col-md-12">
                                                <fieldset>
                                                    <button type="submit" id="form-submit" className="button">Send Message</button>
                                                </fieldset>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="share">
                                                    <h6>You can also keep in touch on: <span><a href="http://facebook.com"><i className="fa fa-facebook"></i></a><a href="http://linkedin.com"><i className="fa fa-linkedin"></i></a><a href="http://twitter.com"><i className="fa fa-twitter"></i></a></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contacts