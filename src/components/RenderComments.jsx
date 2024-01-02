import PropTypes from "prop-types"

RenderComments.propTypes = {
  email: PropTypes.string,
  comment: PropTypes.string,
  time: PropTypes.object,
}

export default function RenderComments({email,comment,time}) {
  console.log(time.day)
  const timeFormatted = `${time.day < 10 ? `0${time.day}` : time.day}/${time.month < 10 ? `0${time.month}` : time.month}/${time.year}, ${time.hours}:${time.minutes}:${time.seconds}`

  return (
    <div className="card bg-body-secondary ">     
      <div className="card-body">
        <div className="card-title-box d-grid align-items-center">
          <h2 className="card-title">{email}</h2>
          <span>

          </span>
        </div>
        
        <p className="card-text">Em {timeFormatted}</p>
        <p className="card-text">{comment}</p>
      </div>
    </div>
  )
}