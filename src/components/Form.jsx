import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import TextArea from "./TextArea";
import PropType from "prop-types"


Form.propType = {
  addComments: PropType.func
}

export default function Form ({addComments}) {
  const [email,setEmail] = useState("")
  const [comment,setComment] = useState("")

  function handleFormSubmit(ev){
    ev.preventDefault()
    const date = new Date()

    const time = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDay(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    }

    addComments({email,comment,time})

    setComment("")
    setEmail("")
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <Label
          className="form-label"
          htmlFor={"email"}
          labelContent={"Email:"}
        />
        <Input
          className="form-control"
          id={"email"}
          type={'email'}
          value={email}
          setValue={setEmail}
        />
    </div>
    <div className="mb-3">
    <Label
          className="form-label"
          htmlFor={"comment-content"}
          labelContent={"Mensagem:"}
        />
        <TextArea 
        className={"form-control"}
        id={"comment-content"}
        value={comment}
        setValue={setComment}
        />
    </div>
    <Button 
    classes="btn btn-primary w-100 mt-3"
    >
      Enviar formulário
    </Button>
    </form>
  )
}