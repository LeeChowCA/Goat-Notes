import { getUser } from "@/auth/server";
import AskAIButton from "@/components/AskAIButton";
import NewNoteButton from "@/components/NewNoteButton";
import NoteTextInput from "@/components/NoteTextInput";
// import HomeToast from "@/components/HomeToast";
import { prisma } from "@/db/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function HomePage({ searchParams }: Props) {
  const noteIdParam = (await searchParams).noteId;
  const user = await getUser();

  const noteId = Array.isArray(noteIdParam)
    ? noteIdParam![0]
    : noteIdParam || "";

  let note = null;
  try {
    note = await prisma.note.findUnique({
      where: { id: noteId, authorId: user?.id },
    });
  } catch (error) {
    console.error("Error fetching note:", error);
    // If the error is that the table doesn't exist, we'll return null note
    // This allows the page to render and display appropriate UI
  }

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <div className="flex w-full max-w-4xl justify-end gap-2">
        <AskAIButton user={user} />
        <NewNoteButton user={user} />
      </div>

      <NoteTextInput noteId={noteId} startingNoteText={note?.text || ""} />

      {/* <HomeToast /> */}
    </div>
  );
}

export default HomePage;
