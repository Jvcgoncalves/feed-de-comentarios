import Form from "./components/Form"
import "./sass/style.scss"

function App() {

  return (
    <>
      <div id="app" className="container w-50 bg-secondary rounded text-dark p-4">
        <h1 className="h2 mb-3">Seção de comentários</h1>
        <Form />
        <div className="coments">

        </div>
      </div>
    </>
  )
}

export default App
