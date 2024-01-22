import React from 'react'
import Header from '../components/home/Header'
import CourseSlider from '../components/home/CourseSlider'
import FeedbackSlider from '../components/home/FeedbackSlider'
import Footer from '../components/home/Footer'

function Home() {
    return (
        <>
            <Header />
            <CourseSlider />
            <FeedbackSlider />
            <Footer />
        </>
    )
}

export default Home