import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware '

const coursestore = (set) => ({
    courses: [],
    addCourse: (course)=> {
        set((state) => ({
            courses:[ course,...state.courses],
        }))
    },
    removeCourse :(courseId) => {
        set((state)=>({
            courses: state.coures.filter((c)=> c.id !== courseId)
        }))
    }, 
    toggleCourseStatus : (courseId) => {
        set((state)=> ({
            courses:state.course.map((course)=> course.Id == completed ? {...course, completed: !course.completed}: course)
        }))
    }
})

const useCourseStore= create (
    devtools(
        persist (CourseStore, {
            name: "courses",
        })
    )
)

export default useCourseStore;

