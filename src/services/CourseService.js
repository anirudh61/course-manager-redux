import courses from './courses.json'

class CourseService {

    static myInstance = null;

    constructor() {
        this.courses = courses
    }

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }

    addCourse = course => {
        if (course == null) {
            course = {
                id: (new Date()).getTime(),
                title: 'New Course'
            }
        }

        this.courses.push(course)
        return this.courses
    }

    findCourseById = courseId =>
        this.courses = courses.find(
            course => course.id === courseId
        )

    findAllCourses = () =>
        this.courses;

    deleteCourse = courseId =>
        this.courses = courses.filter(
            course => course.id !== courseId
        )

    updateCourse = (courseId, course) => {
        if (courseId === course.id) {
            this.title = course.title
         }
    }

    hideWidget = (obj) => {
        var element = document.getElementById(obj)
        element.style.display = 'none'
    }

    static createWidget = (topicId) =>  {

        for(var i=0; i < courses.length; i++) {
            for(var j=0; j < courses[i]["modules"].length; j++) {
                for(var k=0; k < courses[i]["modules"][j]["lessons"].length; k++) {
                    for(var l=0; l < courses[i]["modules"][j]["lessons"][k]["topics"].length; l++) {
                        if(courses[i].modules[j].lessons[k].topics[l].id === topicId) {
                            courses[i].modules[j].lessons[k].topics[l].push({
                                "id": (new Date()).getTime()+'',
                                "type": 'HEADING'
                            })
                        }
                    }
                }
            }
        }
    }

    findWidgetsForTopic = (title) => {

        for(var i=0; i < courses.length; i++) {
            for(var j=0; j < courses[i]["modules"].length; j++) {
                for(var k=0; k < courses[i]["modules"][j]["lessons"].length; k++) {
                    for(var l=0; l < courses[i]["modules"][j]["lessons"][k]["topics"].length; l++) {
                        if(courses[i].modules[j].lessons[k].topics[l].title === title) {
                            return courses[i].modules[j].lessons[k].topics[l].widgets
                        }
                    }
                }
            }
        }
    }

    findAllWidgets = () => {

        var widgetList = [];

        for(var i=0; i < courses.length; i++) {
            for(var j=0; j < courses[i]["modules"].length; j++) {
                for(var k=0; k < courses[i]["modules"][j]["lessons"].length; k++) {
                    for(var l=0; l < courses[i]["modules"][j]["lessons"][k]["topics"].length; l++) {
                        if (courses[i].modules[j].lessons[k].topics[l].widgets !== undefined) {
                            widgetList.push(courses[i].modules[j].lessons[k].topics[l].widgets.type);
                        }
                    }
                }
            }
        }

        return widgetList
    }

}

export default CourseService