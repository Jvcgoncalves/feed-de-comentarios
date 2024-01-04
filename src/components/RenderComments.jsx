import PropTypes from "prop-types"

RenderComments.propTypes = {
  email: PropTypes.string,
  comment: PropTypes.string,
  time: PropTypes.object,
  removeComments: PropTypes.func,
  editComments: PropTypes.func,
}

export default function RenderComments({email,comment,time,id,removeComments,editComments}) {

  const timeFormatted = `${time.day < 10 ? `0${time.day}` : time.day}/${time.month < 10 ? `0${time.month}` : time.month}/${time.year}, ${time.hours}:${time.minutes}:${time.seconds}`

  function toggleMenu(ev){
    
    ev.currentTarget.parentNode.children[2].classList.toggle("active")

  }

  return (
    <div className="card bg-body-secondary" key={id}>     
      <div className="card-body">
        <div className="card-title-box align-items-center row">
          <h2 className="card-title col-11">{email}</h2>
          <span id="menu-toogle" onClick={toggleMenu}></span>
          <div className="manipulate-comment-menu d-flex flex-column bg-body-secondary rounded align-items-center justify-content-center p-0 gap-3">
            <span className="col-auto" id="remove" onClick={removeComments}></span>
            <span className="col-auto" id="edit"></span>
          </div>
        </div>
        <p className="card-text">Em {timeFormatted}</p>
        <p className="card-text">{comment}</p>
      </div>
    </div>
  )
}