import React from 'react'
import { FaPhone } from 'react-icons/fa';

import CourseSlider from '../../components/home/CourseSlider'
import FeedbackSlider from '../../components/home/FeedbackSlider'
import Participants from '../../components/home/Participants'
import ConsultationForm from '../../components/home/ConsultationForm'
import TeacherTeam from '../../components/home/TeacherTeam'
import TrendingTechnology from '../../components/home/TrendingTechnology'
import LatestCourse from "../../components/home/LatestCourse"
import TrainingPhilosophy from "../../components/home/TrainingPhilosophy"
import "./index.css"

function Home() {

    const handleIconClick = () => {
        window.location.href = `tel:${+84345298170}`;
    };

    return (
        <>
            <div className="phone-icon" onClick={handleIconClick}>
                <FaPhone />
            </div>
            <CourseSlider />
            <TrendingTechnology />
            <FeedbackSlider />
            <Participants />
            <TrainingPhilosophy />
            <TeacherTeam />
            <LatestCourse />
            <ConsultationForm />
        </>
    )
}

export default Home