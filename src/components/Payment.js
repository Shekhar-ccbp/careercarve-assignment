function Payment({duration, mentor}) {
  let rate
  if (duration === 30) {
    rate = 2000
  } else if (duration === 45) {
    rate = 3000
  } else {
    rate = 4000
  }

  return (
    <div className="payment">
      <h3>Payment Details</h3>
      <p>Mentor: {mentor.name}</p>
      <p>Duration: {duration} mins</p>
      <p>Total: ₹{rate}</p>
      <button type="button">Proceed to Pay</button>
    </div>
  )
}

export default Payment
