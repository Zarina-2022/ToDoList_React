import React from "react"

const TodoList = ({item, yapilacaklar, setYapilacaklar})=>{
  // silme islemi
  const handleDelete=()=>{
    const temp = yapilacaklar.filter((x)=>x.id !== item.id)       // temp=temporary=gecici
    setYapilacaklar(temp)
    /*
    // for dongusu ile silme islemi:
    const temp = [] // burda bos ve yeni bir sepet olusturduk (yapilacaklar-eski sepettir)
    for(let i=0, i<yapilacaklar.length, i++){
      if(item.id === yapilacaklar[i].id){
        // hicbir sey yapma (burasi bos)
      }
      else{
        temp.push(yapilacaklar[i]) // burda yapilacaklar.push deme imkanimiz yok
      }
    }
    setYapilacaklar(temp)
    */
   /*
    // ustteki for dondusunu kisaca yazmak icin:
        const temp = []
    for(let i=0, i<yapilacaklar.length, i++){
      if(item.id !== yapilacaklar[i].id){
        temp.push(yapilacaklar[i])
      }
    }
    setYapilacaklar(temp)
   */
  }
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
                      <button onClick={handleDelete} type="button" class="btn btn-sm btn-danger">Delete</button>
                    </div>
                  </div>

                </div>
    )
}



export default TodoList