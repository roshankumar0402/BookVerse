"use client"
import Image from 'next/image'
import { useState } from 'react';

type Book={
  title:string,
  author:string,
  genre:string,
  coverImg?:string
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([{title:"abc", author:"roshan", genre:"action"}]); //array of books
  const [book, setBook] = useState<Book|undefined>();

  const handleBookDelete = (index:number) => {
    const filteredBooks = books.filter((_, i) => i !== index);
    setBooks(filteredBooks);
  };

  return (
    <>
      <div className="card">
        <h1>Books App</h1>
        {/* <input
          type="text"
          placeholder="Create Task"
          onChange={(e) => setBook({text: e.target.value, completed: false })}
          value={book.text}
        ></input>

        <button
          onClick={() => {
            setBooks([...books, book]);
            setBook({ text: "", completed: false });
          }}
          disabled={book.text.trim()===""}
        >
          Add!
        </button> */}
      </div>
      <div className="card">
        {books.map((x, index) => {
          return (
            // <div>
            //   {x.completed ? <s>{x.text}</s> : x.text}
            //   <input
            //     type="checkbox"
            //     checked={x.completed}
            //     onChange={() => handleTodoToggle(index)}
            //   ></input>
            //   <button onClick={() => handleBookDelete(index)}>Delete</button>
            // </div>
            <div> </div>
          );
        })}
      </div>
    </>
  );  
}
