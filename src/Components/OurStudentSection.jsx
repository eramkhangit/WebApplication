import React from 'react'
import Cards from './Cards'
import courses from '../Images/courses.png'
import certificate from '../Images/certificate.png'
import student from '../Images/student.png'



export default function OurStudentSection() {
    const card1 = {
        courseNumber: '600+',
        courseName: "Different Courses"
    }
    const card2 = {
        counts: '700,000+',
        enrolled: "Students Enrolled"
    }
    const card3 = {
        students: '10,000+',
        transition: "Successful Transition"
    }

    return (
        <div>
            <div className=' h-auto  flex-wrap flex-col items-center text-center'>
                <div
                    className='w-full h-auto flex flex-wrap flex-col items-center'>

                    <p className='text-indigo-800 font-bold text-2xl text-center md:text-4xl '>
                        Lorem Lorem, Ipsum</p>

                    <div className='w-36 h-1 border-b-4 border-yellow-400 rounded-2xl mt-3 mb-12 md:mt-4 md:w-[12rem]'
                    ></div>

                </div>

            </div>

            <div className=' mx-auto flex flex-wrap flex-col  justify-evenly md:flex-row md:w-[50rem] '
            >
                <Cards image={courses} digit={card1.courseNumber} courses={card1.courseName} />

                <Cards image={certificate} digit={card2.counts} textcontent={card2.enrolled} />

                <Cards image={student} digit={card3.students} textcontent={card3.transition} />

            </div>

        </div>
    )
}