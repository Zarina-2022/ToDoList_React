import React from "react"

const TodoList = ({ item, yapilacaklar, setYapilacaklar }) => {
  // Button Delete
  const deleteBtn = () => {
    const temp = yapilacaklar.filter((x) => x.id !== item.id)       // temp=temporary=gecici
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
  // done or not done button
  const doneNotDoneBtn = ()=>{
    var temp = []
    for(var a=0; a<yapilacaklar.length; a++){
      if(yapilacaklar[a].id === item.id){
        var newDoneNotDoneList={
          // spread ile newDoneNotDoneList object'i daha kisa write:
           ...item,
            haveDone: !item.haveDone // burda yeni item da ekleyebiliriz, veya var olani change.
          /* burda daha genis write:
          id:item.id,
          text:item.text,
          date:item.date,
          haveDone: !item.haveDone // false'u true yapacak
          */
        }
        temp.push(newDoneNotDoneList)
      } else{
        temp.push(yapilacaklar[a])
      }
    }
    setYapilacaklar(temp)
  }


  return (
    <div className="alert alert-secondary d-flex justify-content-between">

      <div>
        <h2 style={{textDecoration: item.haveDone === true ? "line-through" : "none"}}>{item.text}</h2>
        <p>Date: {new Date(item.date).toLocaleString().replaceAll("/", ".")}</p>
      </div>

      <div className="d-flex align-items-center">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button onClick={doneNotDoneBtn} type="button" class="btn btn-sm btn-success">{item.haveDone === true ? "Not Done" : "Done"}</button>
          <button type="button" class="btn btn-sm btn-warning">Update</button>
          <button onClick={deleteBtn} type="button" class="btn btn-sm btn-danger">Delete</button>
        </div>
      </div>

    </div>
  )
}



export default TodoList