export default function Button ({children,classes,type = null,id= null}) {

  return (
    <button type={type ?? "submit"} id={id ?? "send-button"} className={`${classes}`}>
        {children}
    </button>
  )
}