"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { title } from "process";
import { useState } from "react";

type Book = {
  title?: string;
  author?: string;
  genre?: string;
  coverImg?: string;
};

export default function Home() {
  const [books, setBooks] = useState<Book[]>([
    {
      title: "abc",
      author: "roshan",
      genre: "action",
      coverImg:
        "https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg",
    },
    {
      title: "xyz",
      author: "abhay",
      genre: "action",
      coverImg:
        "https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg",
    },
  ]); //array of books
  const [book, setBook] = useState<Book | undefined>();
  const [showAdd, setShowAdd] = useState<boolean>(false);

  const handleBookDelete = (index: number) => {
    const filteredBooks = books?.filter((_, i) => i !== index);
    setBooks(filteredBooks);
  };
  const handleSubmit = () => {
    if (!book?.coverImg) {
      setBook({
        ...book,
        coverImg:
          "https://media.istockphoto.com/photos/book-cover-picture-id182732882?k=6&m=182732882&s=170667a&w=0&h=SQHKizPZ2m1U4AJcSptz3wE18g6IwHjVDOKyKP9HQQY=",
      });
    }
    if (book !== undefined) {
      setBooks([...books, book]);
    }
    setBook({});
  };
  return (
    <div className="bg-background dark min-h-screen p-5">
      <div className="">
        <h1 className="text-primary">Books App</h1>
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
      <div className="card flex flex-wrap gap-4">
        {books.map((x, index) => {
          return (
            <Card className="w-40">
              <CardContent className="text-sm">
                <h1 className="text-xl">{x.title}</h1>
                <img src={x.coverImg} />
                <p>Author: {x.author}</p>
                <p>Genre: {x.genre}</p>
              </CardContent>
            </Card>
          );
        })}
        {showAdd ? (
          <Card className="w-40 ">
            <CardContent className="gap-4 p-4 flex-col flex">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="Title">Title</Label>
                <Input
                  type="text"
                  id="Title"
                  placeholder=" Enter Title"
                  onChange={(e) => setBook({ ...book, title: e.target.value })}
                  value={book?.title}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="Author">Author</Label>
                <Input
                  type="text"
                  id="Author"
                  placeholder="Enter Author"
                  onChange={(e) => setBook({ ...book, author: e.target.value })}
                  value={book?.author}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="Genre">Genre</Label>
                <Input
                  type="text"
                  id="Genre"
                  placeholder="Enter Genre"
                  onChange={(e) => setBook({ ...book, genre: e.target.value })}
                  value={book?.genre}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="Cover Image">Cover Image</Label>
                <Input
                  type="text"
                  id="Cover Image"
                  placeholder="Cover Image"
                  onChange={(e) =>
                    setBook({ ...book, coverImg: e.target.value })
                  }
                  value={book?.coverImg}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                  setBook({});
                }}
              >
                Submit
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card
            className="w-40"
            onClick={() => {
              setShowAdd(true);
            }}
          >
            <CardContent className="gap-4 p-4 flex-col flex">
              {" "}
              Add Book
            </CardContent>
          </Card>
        )}
      </div>
      {/* <div className="bg-green-600 border-blue-700 border-4 w-fit p-3 m-2 gap-20 flex ">
        <div className="bg-white border-red-700 w-fit p-5  border-2">Text</div>
        <div className="bg-white border-red-700 w-fit p-5  border-2">Text</div>
      </div> */}
    </div>
  );
}
