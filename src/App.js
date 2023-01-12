import React, { useState } from "react"
import Form from "./Components/Form"
import TodoList from "./Components/TodoList"
import todo from "./assets/todo.gif"

function App() {
  const [yapilacaklar, setYapilacaklar] = useState([])

  // map ile yazildi ilk harfin Buyuk olmasi icin:
  /*
const upperFirstLetter = (text) => {
        return (text.charAt(0).toUpperCase() + text.slice(1));
    }

  */
  /*  function capitalize(word) {
      return word
        .split('')
        .map((letter, index) =>
          index ? letter.toLowerCase() : letter.toUpperCase(),
        )
        .join('');
    }
  */

  // js ile yazildi ilk harfin Buyuk olmasi icin:
  /*
    const capitalized =(word)=>{
    word.charAt(0).toUpperCase() + word.slice(1)
  }
*/
  return (
    <div className="container">
      <h1 className="my-5  text-center"> To Do App</h1>
      <Form yapilacaklar={yapilacaklar} setYapilacaklar={setYapilacaklar} />
      {
        yapilacaklar.length === 0 ? (
          <div className="d-flex flex-column align-items-center">
            <img src={todo} />
            <h2 className="text-center my-5">You have nothing to do yet</h2>
          </div>
        ) : (
          <div className="container my-5">
            {
              yapilacaklar.map((item, index) => (
                <TodoList key={item.id} item={item} 
                yapilacaklar={yapilacaklar} setYapilacaklar={setYapilacaklar}/>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default App;
