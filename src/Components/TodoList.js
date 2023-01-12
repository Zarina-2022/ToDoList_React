import React, { useState } from "react"

const TodoList = ({ item, yapilacaklar, setYapilacaklar }) => {

  // DELETE BUTTON
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

  // DONE OR NOT DONE BUTTON
  const doneNotDoneBtn = () => {
    var temp = []
    for (var a = 0; a < yapilacaklar.length; a++) {
      if (yapilacaklar[a].id === item.id) {
        var newDoneNotDoneList = {
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
      } else {
        temp.push(yapilacaklar[a])
      }
    }
    setYapilacaklar(temp)
  }

  // UPDATE BUTTON
  // CRUD yapisi = Create Read Update Delete ile write
  const [updateButton, setUpdateButton] = useState(false)
  const [updateInputText, setUpdateInputText] = useState(item.text) // baslangic degeri inputtaki var olan value
  const confirmBtn = () => {
    /* Validation - dogrulama*/
    if (confirmBtn === "") {
      alert("The to-do field cannot be left blank")
      return
    }
    if (confirmBtn === item.text) {
      setUpdateButton(false)
      return
    }
    // Ayni inputun girilmesini engellemek icin:
    const nonRepeatInput = yapilacaklar.filter(x => x.id !== item.id)
    var inputValue = false
    nonRepeatInput.map(y => {
      if (y.text.toLowerCase() === updateInputText.toLowerCase()) { // lowercase ile girilen kelimenin buyuk harfle mi, kucuk harfle mi yazildi fark etmez: ayni kelime olarak algilar
        inputValue = true
      }
    })
    if (inputValue === true) {
      if (window.confirm("Such to-do already exist. Still add?") === false) {
        return
      }
    }

    // yeni input value girilmesi icin:
    var temp = []
    for (var i = 0; i < yapilacaklar.length; i++) {
      if (yapilacaklar[i].id === item.id) {
        var confirmBtn = {
          ...item,
          text: updateInputText.charAt(0).toUpperCase() + updateInputText.slice(1),
          date: new Date()
        }
        temp.push(confirmBtn)
      } else {
        temp.push(yapilacaklar[i])
      }
    }
    setYapilacaklar(temp)
    setUpdateButton(false)
  }

  return (
    <div className="alert alert-secondary d-flex justify-content-between">
      <div>
        {
          updateButton === true ? (
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Write here ..."
                value={updateInputText}
                onChange={(event) => setUpdateInputText(event.target.value)}
              />
              <button
                onClick={() => {
                  setUpdateButton(false)
                  setUpdateInputText(item.text) // update btn'e tiklandiginda eski value sav olmuyor 
                }}
                className="btn btn-danger">
                Cancel
              </button>

              <button
                onClick={confirmBtn}
                className="btn btn-primary">
                Confirm
              </button>

            </div>
          ) : (
            <h2 style={{ textDecoration: item.haveDone === true ? "line-through" : "none" }}>{item.text}</h2>
          )
        }
        <p>Date: {new Date(item.date).toLocaleString().replaceAll("/", ".")}</p>
      </div>

      <div className="d-flex align-items-center">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button onClick={doneNotDoneBtn} type="button" class="btn btn-sm btn-success">{item.haveDone === true ? "Not Done" : "Done"}</button>
          <button onClick={() => setUpdateButton(true)} type="button" class="btn btn-sm btn-warning">Update</button>
          <button onClick={deleteBtn} type="button" class="btn btn-sm btn-danger">Delete</button>
        </div>
      </div>

    </div>
  )
}

export default TodoList