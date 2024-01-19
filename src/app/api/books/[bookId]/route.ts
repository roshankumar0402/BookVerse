import prisma from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: { bookId: string } }
) {
  const bookId = params.bookId;
  await prisma.book.delete({ where: { id: parseInt(bookId) } });
  return Response.json("Successfully Deleted");
}

export async function UPDATE(
    request: Request,
    { params }: { params: { bookId: string } }
  ) {
    const bookId = params.bookId;
    const body = request.json();
    await prisma.book.update({ where: { id: parseInt(bookId) }, data: {body.} });
    return Response.json("Successfully Updated");
  }
  