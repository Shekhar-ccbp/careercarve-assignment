function SessionDuration({onChange}) {
  const handleDurationChange = e => {
    onChange(parseInt(e.target.value))
  }

  return (
    <div className="session-duration">
      <label>
        Duration:
        <select onChange={handleDurationChange}>
          <option value="30">30 mins</option>
          <option value="45">45 mins</option>
          <option value="60">60 mins</option>
        </select>
      </label>
    </div>
  )
}

export default SessionDuration
