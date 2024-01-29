import React from 'react'

import CourseSlider from '../../components/home/CourseSlider'
import FeedbackSlider from '../../components/home/FeedbackSlider'
import Participants from '../../components/home/Participants'
import ConsultationForm from '../../components/home/ConsultationForm'
import TeacherTeam from '../../components/home/TeacherTeam'
import TrendingTechnology from '../../components/home/TrendingTechnology'
import LatestCourse from "../../components/home/LatestCourse"
import TrainingPhilosophy from "../../components/home/TrainingPhilosophy"
import SuitableObject from "../../components/home/SuitableObject"
import CourseAdvantages from "../../components/home/CourseAdvantages"
import "./index.css"

function Home() {

    return (
        <>
            <CourseSlider />
            <TrendingTechnology />
            <FeedbackSlider />
            < SuitableObject />
            <Participants />
            <CourseAdvantages />
            <TrainingPhilosophy />
            <TeacherTeam />
            <LatestCourse />
            <ConsultationForm />
        </>
    )
}

export default Home