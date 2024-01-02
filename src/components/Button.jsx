export default function Button ({children,classes,type = null}) {

  return (
    <button type={type ?? "submit"} className={`${classes}`}>
        {children}
    </button>
  )
}