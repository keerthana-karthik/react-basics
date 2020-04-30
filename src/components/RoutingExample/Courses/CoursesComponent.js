import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import CourseComponent from "../Course/CourseComponent";
import coursesClasses from './CoursesComponent.css';

class CoursesComponent extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'React - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div style={{"textAlign": "center"}}>
                <h3>Amazing Udemy Courses</h3>
                <section className={coursesClasses.Courses}>
                    {
                        this.state.courses.map( course => {
                            return <Link to={{
                                                pathname: this.props.match.url + '/' + course.id,
                                                search: '?title='+course.title
                                                
                                            }}>
                                <article className={coursesClasses.Course} key={course.id}>{course.title}</article>
                                </Link>;
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={CourseComponent} />
            </div>
        );
    }
}

export default CoursesComponent;