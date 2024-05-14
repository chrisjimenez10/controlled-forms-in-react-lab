import {useState} from "react";

const Bookshelf = () => {

    //State
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
    });

    //Event handlers
    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        setBooks([...books, newBook]);
        event.preventDefault();
        setNewBook({title: "", author: "",});
    };

  return (
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3 style={{backgroundColor: "black", padding: "5px", borderRadius: "5px"}}>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title" style={{backgroundColor: "black", padding: "3px", borderRadius: "5px", width: "40px"}}>Title: </label>
                <input id="title" type="text" name="title" value={newBook.title} onChange={handleInputChange} />

                <label htmlFor="author" style={{backgroundColor: "black", padding: "3px", borderRadius: "5px", marginTop: "4px", width: "60px"}}>Author: </label>
                <input id="author" type="text" name="author" value={newBook.author} onChange={handleInputChange} />
                <button type="submit">Add</button>
            </form>   
        </div>
        <div className="bookCardsDiv">
            
            {books.map((book, index)=>{
                return (
                    <div className="bookCard" key={index}>
                        <h3>{book.title}</h3>
                        <h5>{book.author}</h5>
                    </div>             
                )
            })}
        </div>
    </div>

  )

}

export default Bookshelf;