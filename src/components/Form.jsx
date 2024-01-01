import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import TextArea from "./TextArea";

export default function Form () {
  const [email,setEmail] = useState("")
  const [coment,setComent] = useState("")

  function handleFormSubmit(ev){
    ev.preventDefault()
    console.log(email)
    console.log(coment)

    setComent("")
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
          htmlFor={"coment-content"}
          labelContent={"Mensagem:"}
        />
        <TextArea 
        className={"form-control"}
        id={"coment-content"}
        value={coment}
        setValue={setComent}
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