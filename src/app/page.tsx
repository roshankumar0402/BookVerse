"use client";

import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogContent,
  Dialog,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { FormEvent, useEffect, useState } from "react";

export type Book = {
  id?: number;
  title: string;
  author: string;
  genre: string;
  cover?: string;
};

export default function Component() {
  const [books, setBooks] = useState<Book[]>([]);

  const handleAddBook = async (newBook: Book) => {
    try {
      const response = await fetch("/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        throw new Error(`Error adding book: ${response.statusText}`);
      }

      const addedBook = await response.json();
      setBooks((prevBooks) => [...prevBooks, addedBook.book]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBook = async (id: number | undefined) => {
    try {
      if (id === undefined) {
        console.log("Invalid index");
        return;
      }

      const response = await fetch(`/api/books/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error deleting book: ${response.statusText}`);
      }

      const deletedBook = await response.json();

      setBooks((prevBooks) =>
        prevBooks.filter((book, index) => book.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const response = await fetch("/api/books");
        if (!response.ok) {
          throw new Error(`Error fetching books: ${response.statusText}`);
        }

        const booksData = await response.json();
        setBooks(booksData.books as Book[]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooksData();
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          BookVerse - A collection of the best Books!
        </h1>
        <AddBook handleAddBook={handleAddBook} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <Card key={book.id}>
            <CardContent className="flex flex-col items-start gap-4 p-4 min-h-full bg-gray-100">
              <img
                alt="Book Cover"
                className="aspect-[2/3] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                height={150}
                src={
                  book.cover
                    ? book.cover
                    : "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png"
                }
                width={100}
              />
              <div className="flex flex-col gap-2 w-full flex-grow justify-between">
                <div className="flex flex-col gap-2 w-full">
                  <h3 className="font-semibold text-lg">{book.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Author: {book.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Genre: {book.genre}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDeleteBook(book.id)}
                  className="bg-red-600 font-bold text-white"
                >
                  <TrashIcon className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        <AddBookCard handleAddBook={handleAddBook} />
      </div>
    </div>
  );
}

function AddBook({
  handleAddBook,
}: {
  handleAddBook: (newBook: Book) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="flex items-center gap-2 bg-slate-600 text-white"
          variant="default"
        >
          <PlusIcon className="w-4 h-4" />
          Add Book
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fill details of new Book</DialogTitle>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const newBook: Book = {
              title: formData.get("title") as string,
              author: formData.get("author") as string,
              genre: formData.get("genre") as string,
              cover: formData.get("cover")
                ? (formData.get("cover") as string)
                : "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png",
            };
            handleAddBook(newBook);
            setOpen(false);
          }}
        >
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" required />
          </div>
          <div className="space-y-1">
            <Label htmlFor="author">Author</Label>
            <Input id="author" name="author" required />
          </div>
          <div className="space-y-1">
            <Label htmlFor="genre">Genre</Label>
            <Input id="genre" name="genre" required />
          </div>
          <div className="space-y-1">
            <Label htmlFor="cover">Cover Image URL</Label>
            <Input id="cover" name="cover" type="url" />
          </div>
          <DialogFooter>
            <Button className="w-full" type="submit">
              Add Book
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function AddBookCard({
  handleAddBook,
}: {
  handleAddBook: (newBook: Book) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card>
          <CardContent className="flex flex-col items-center justify-center font-bold text-2xl gap-4 p-4 min-h-full bg-gray-100">
            <PlusIcon className="w-4 h-4" />
            Add Book
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Book</DialogTitle>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const newBook: Book = {
              title: formData.get("title") as string,
              author: formData.get("author") as string,
              genre: formData.get("genre") as string,
              cover: formData.get("cover")
                ? (formData.get("cover") as string)
                : "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png",
            };
            handleAddBook(newBook);
            setOpen(false);
          }}
        >
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" required />
          </div>
          <div className="space-y-1">
            <Label htmlFor="author">Author</Label>
            <Input id="author" name="author" required />
          </div>
          <div className="space-y-1">
            <Label htmlFor="genre">Genre</Label>
            <Input id="genre" name="genre" required />
          </div>
          <div className="space-y-1">
            <Label htmlFor="cover">Cover Image URL</Label>
            <Input id="cover" name="cover" type="url" />
          </div>
          <DialogFooter>
            <Button className="w-full" type="submit">
              Add Book
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
