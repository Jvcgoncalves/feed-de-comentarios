import { Children } from "react";

export default function Button ({children,classes}) {

  return (
    <button type="submit" className={classes}>
        {children}
    </button>
  )
}