export default function Label ({htmlFor,labelContent, className}) {

  return (
    <label 
    className={className}
    htmlFor={htmlFor}
    >
      {labelContent}
    </label>
  )
}