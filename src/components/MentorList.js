function MentorList({onSelect}) {
  const mentors = []

  return (
    <div className="mentor-list">
      <h3>Available Mentors</h3>
      {mentors.map(mentor => (
        <div key={mentor} onClick={() => onSelect(mentor)} role="list">
          {mentor.name} - {mentor.expertise}
        </div>
      ))}
    </div>
  )
}

export default MentorList
