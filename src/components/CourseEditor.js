import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import CourseService from '../services/CourseService'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills"
import WidgetReducer from "../reducers/WidgetReducer"
import WidgetListContainer from "../containers/WidgetListContainer"

const store = createStore(WidgetReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class CourseEditor extends React.Component {

    constructor(props) {
        super(props)
        this.courseService = CourseService.getInstance();

        const courseId = parseInt(props.match.params.id)
        const course = this.courseService.findCourseById(courseId)

        const module = course.modules[0];
        const lesson = module.lessons[0];
        const topic = lesson.topics[0];
        const selectedTopic = topic

        this.state = {
            course: course,
            module: module,
            lesson: lesson,
            topic: topic,
            selectedTopic: selectedTopic,
            preview: false
        }
    }

    selectTopic = (topic) => {
        this.setState({
            selectedTopic: topic
        });
    }

    createLesson = () => {
        this.setState(() => {
            this.state.module.lesson = {
                id: (new Date()).getTime(),
                title: 'New Lesson'
            }

            if (this.state.module.lessons === undefined)
                return this.state.module.lesson

            this.state.module.lessons.push(this.state.module.lesson)
            return this.state.module.lessons
        });
    }

    selectLesson = (lesson) => {
        this.setState({
            topic: lesson.topics
        });
    }

    deleteLesson = (lesson) =>
        this.setState(() => {
            this.state.module.lessons.splice(this.state.module.lessons.indexOf(lesson), 1);
            return this.state.module.lessons
        });

    createModule = (module) =>
        this.setState(() => {
            this.state.course.modules.push(module);
            return {course: this.state.course};
        });

    selectModule = module =>
        this.setState({
            module: module
        })

    deleteModule = (module) =>
        this.setState(() => {
            this.state.course.modules.splice(this.state.course.modules.indexOf(module), 1);
            return {course: this.state.course};
        });

    titleChanged = (event) => {
        this.setState(
            {
                module: {title: event.target.value}
            });
    }

    render() {

        store.dispatch({
            type: 'GET_WIDGETS_FOR_TOPIC',
            widgets: this.courseService.findWidgetsForTopic(this.state.selectedTopic["title"]),
            preview: this.state.preview
        });

        return (

            <div className="container">

                <div className="container">

                    <div>

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">

                            <button className="btn btn-sm btn-secondary">
                                <i className="fa fa-times" style={{fontSize: '20px'}}/>
                            </button>

                            <a className="navbar-brand" style={{marginLeft: '20px'}}>
                                {this.state.course.title}</a>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item active">
                                        <a className="nav-link horizontal" style={{marginLeft: '40px'}}
                                           href="#">Build</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link horizontal active" style={{marginLeft: '40px'}}
                                           href="#">Pages</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link horizontal" style={{marginLeft: '40px'}} href="#">Theme
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link horizontal" style={{marginLeft: '40px'}} href="#">Store
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link horizontal" style={{marginLeft: '40px'}} href="#">Apps
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link horizontal" style={{marginLeft: '40px'}} href="#">
                                            Settings
                                        </a>
                                    </li>

                                    <li>
                                        <button className="btn btn-sm btn-danger" style={{marginLeft: '40px'}}>
                                            <i className="fa fa-plus" style={{fontSize: '20px'}}/>
                                        </button>
                                    </li>

                                </ul>

                            </div>

                        </nav>

                    </div>

                    <div className="row">

                        <div className="col-3">

                            <ul className="nav flex-column nav-pills red">

                                <a className="nav-link">

                                    <ModuleList
                                        createModule={this.createModule}
                                        titleChanged={this.titleChanged}
                                        selectModule={this.selectModule}
                                        deleteModule={this.deleteModule}
                                        modules={this.state.course.modules}/>

                                </a>

                            </ul>

                        </div>

                        <div className="col-9">

                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <LessonTabs
                                        lessons={this.state.module.lessons}
                                        createLesson={this.createLesson}
                                        deleteLesson={this.deleteLesson}
                                        selectLesson={this.selectLesson}
                                    />
                                </li>

                            </ul>

                            <ul className="nav nav-tabs">

                                <li className="nav-item">
                                    <TopicPills
                                        topics={this.state.lesson.topics}
                                        selectTopic={this.selectTopic}
                                    />
                                </li>

                            </ul>

                            <Provider store={store}>
                                <WidgetListContainer/>
                            </Provider>

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default CourseEditor