import PropTypes from "prop-types"

TextArea.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
}

export default function TextArea ({id,className,value,setValue}) {

  return (
    <textarea 
    required 
    className={className} 
    id={id} 
    cols="30" 
    rows="5"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    ></textarea>
  )
}