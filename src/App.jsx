import Form from "./components/Form"
import RenderComments from "./components/RenderComments"
import usaAddComments from "./hooks/useAddComments"
import "./sass/style.scss"

function App() {
  const {comments,addComments} = usaAddComments()


  return (
    <>
      <div id="app" className="container bg-secondary rounded text-dark p-4">
        <h1 className="h3 mb-3">Seção de comentários</h1>
        <Form 
        addComments={addComments}
        />
        <div className="coments mt-5 d-flex flex-column row-gap-4">
          {
            comments.map(comment=>{
              console.log(comment)
              return (
                <RenderComments 
                key={comment.id}
                comment={comment.comment}
                email={comment.email}
                time={comment.time}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
