import { Book } from "@/app/page";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

// GET request handler to fetch all books
export async function GET() {
  const books = await prisma.book.findMany();
  return Response.json({ books });
}

// POST request handler to add a new book with error-handling
export async function POST(req: NextRequest) {
  try {
    const newBook = (await req.json()) as {
      title?: string;
      author?: string;
      genre?: string;
      cover?: string;
    };
    console.log(newBook);

    const createdBook = await prisma.book.create({
      data: {
        title: newBook?.title ?? "",
        author: newBook?.author ?? "",
        genre: newBook?.genre ?? "",
        cover: newBook?.cover ?? "",
      },
    });

    return Response.json({ book: createdBook });
  } catch (error) {
    console.error("Error creating book:", error);
    return Response.json({
      status: 500,
      body: { error: "Internal Server Error" },
    });
  }
}

// DELETE request handler to delete a book with error-handling
export async function DELETE(req: NextRequest) {
  const body = req.json() as { id?: number };
  const bookId = body.id;
  if (!bookId) {
    return Response.json({ error: "Book doesn't exist" });
  }
  try {
    const deletedBook = await prisma.book.delete({
      where: {
        id: bookId,
      },
    });

    return Response.json(deletedBook);
  } catch (error) {
    console.error("Error deleting book:", error);
    Response.json({ error: "Internal Server Error" });
  }
}
