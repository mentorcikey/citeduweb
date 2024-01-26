import React from 'react'

import CourseSlider from '../../components/home/CourseSlider'
import FeedbackSlider from '../../components/home/FeedbackSlider'
import Participants from '../../components/home/Participants'
import ConsultationForm from '../../components/home/ConsultationForm'
import TeacherTeam from '../../components/home/TeacherTeam'

function Home() {
    return (
        <>
            <CourseSlider />
            <TeacherTeam />
            {/* <Participants /> */}
            {/* <FeedbackSlider /> */}
            <ConsultationForm />
        </>
    )
}

export default Home