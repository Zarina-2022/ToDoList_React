import React from "react"

const TodoList = ({item})=>{
    return(
        <div className="alert alert-secondary d-flex justify-content-between">
                  
                  <div>
                    <h2>{item.text}</h2>
                    <p>Date: {new Date(item.date).toLocaleString().replaceAll("/",".")}</p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-sm btn-success">{item.done === true ? "Not Done" : "Done"}</button>
                      <button type="button" class="btn btn-sm btn-warning">Update</button>
                      <button type="button" class="btn btn-sm btn-danger">Delete</button>
                    </div>
                  </div>

                </div>
    )
}



export default TodoList