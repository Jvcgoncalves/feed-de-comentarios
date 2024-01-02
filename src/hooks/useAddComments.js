import { useState } from "react";


export default function usaAddComments(){
  const [comments, setComments] = useState([])

  function addComments ({email,comment,time}) {
    const id = Math.floor(Math.random() * 10000000)
    const newComment = {email,comment,id,time}

    setComments(state => {
      
      return [...state, newComment]
    })

    console.log(comments)
  }

  return {comments,addComments}
}