import React, { useState } from "react";

// props'u iki sekilde karsilayabiliriz baska sayfada: biri (props), digeri ({isim,setIsim})
// const Form = ({yapilacaklar,setYapilacaklar}) veya const Form = (props):
const Form = ({ yapilacaklar, setYapilacaklar }) => {

    const [enteredText, setEnteredText] = useState("")
    const checkForm = (event) => {
        event.preventDefault()
        /* Validation*/
        if (enteredText === "") {
            alert("Type the to-do to add")
            return
        }

        var newValue = false
        yapilacaklar.map(item => {
            if (item.text.toLocaleLowerCase() === enteredText.toLocaleLowerCase()) {
                newValue = true
            }
        })
        if (newValue = true) {
            if (window.confirm("Such to-do already exist. Still add?") === false) {
                return
            }
        }

        const newToDo = {
            id: String(new Date().getTime()),
            text: enteredText.charAt(0).toUpperCase() + enteredText.slice(1), // (en kisa Capitalise yontemi) 
            date: new Date(),
            haveDone: false
        }
        setYapilacaklar([...yapilacaklar, newToDo])
    }
    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={checkForm} className="w-50">
                <div className="input-group">
                    <input
                        type="text"
                        // autoCorrect={false} - otom. duzeltmeyi kapatir
                        // autoComplete={false} - otom. tamamlamaz
                        className="form-control"
                        placeholder="Write here what do you want to do..."
                        value={enteredText}
                        onChange={(event) => setEnteredText(event.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form