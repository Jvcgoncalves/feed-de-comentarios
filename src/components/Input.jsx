import PropTypes from "prop-types"

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
}

export default function Input ({type,id,className,value,setValue}) {

  return (
    <input
    className={className}
    id={id}
    type={type}
    required
    value={value}
    onChange={(e)=> setValue(e.target.value) }
    />
  )
}