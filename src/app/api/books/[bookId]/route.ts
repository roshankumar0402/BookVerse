import prisma from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: { bookId: string } }
) {
  const bookId = params.bookId;
  await prisma.book.delete({ where: { id: parseInt(bookId) } });
  return Response.json("Successfully Deleted");
}
