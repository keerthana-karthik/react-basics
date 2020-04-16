import React, { Component } from 'react';

class CourseComponent extends Component {
    state = {
        title: ''
    }
    componentDidMount() {
        this.getQueryParameters();
    }
    componentDidUpdate() {
        this.getQueryParameters();
    }
    getQueryParameters() {
        const query = new URLSearchParams(this.props.location.search);
        for(let param of query.entries()) {
            if(this.state.title !== param[1]) {
                this.setState({'title': param[1]});
            }
        }
    }
    render () {
        return (
            <div>
                <h4>{this.state.title}</h4>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default CourseComponent;