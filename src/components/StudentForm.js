import {useState} from 'react'

function StudentForm({onSubmit}) {
  const [interest, setInterest] = useState('')
  const [preferredMentor, setPreferredMentor] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({interest, preferredMentor})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Area of Interest:
        <input
          type="text"
          value={interest}
          onChange={e => setInterest(e.target.value)}
        />
      </label>
      <label>
        Preferred Mentor:
        <input
          type="text"
          value={preferredMentor}
          onChange={e => setPreferredMentor(e.target.value)}
        />
      </label>
      <button type="submit">Find Mentors</button>
    </form>
  )
}

export default StudentForm
