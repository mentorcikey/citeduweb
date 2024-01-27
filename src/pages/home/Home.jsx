import React from 'react'

import CourseSlider from '../../components/home/CourseSlider'
import FeedbackSlider from '../../components/home/FeedbackSlider'
import Participants from '../../components/home/Participants'
import ConsultationForm from '../../components/home/ConsultationForm'
import TeacherTeam from '../../components/home/TeacherTeam'
import TrendingTechnology from '../../components/home/TrendingTechnology'
import LatestCourse from "../../components/home/LatestCourse"

function Home() {
    return (
        <>
            <CourseSlider />
            <TrendingTechnology />
            <Participants />
            <LatestCourse />
            <TeacherTeam />
            <FeedbackSlider />
            <ConsultationForm />
        </>
    )
}

export default Home