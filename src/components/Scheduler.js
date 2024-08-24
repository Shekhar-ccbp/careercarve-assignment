import {useState} from 'react'
import StudentForm from './StudentForm'
import MentorList from './MentorList'
import Payment from './Payment'
import SessionDuration from './SessionDuration'
import './styles.css'

function Scheduler() {
  const [studentData, setStudentData] = useState(null)
  const [mentor, setMentor] = useState(null)
  const [duration, setDuration] = useState(30)

  const handleStudentSubmit = data => {
    setStudentData(data)
  }

  const handleMentorSelect = mentors => {
    setMentor(mentors)
  }

  const handleDurationChange = durations => {
    setDuration(durations)
  }

  return (
    <div className="scheduler">
      <StudentForm onSubmit={handleStudentSubmit} />
      {studentData && (
        <MentorList studentData={studentData} onSelect={handleMentorSelect} />
      )}
      {mentor && <SessionDuration onChange={handleDurationChange} />}
      {mentor && <Payment duration={duration} mentor={mentor} />}
    </div>
  )
}

export default Scheduler
