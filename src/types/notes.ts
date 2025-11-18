interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
}

interface CreateNote {
  title: string;
  content: string;
  tag: string;
}

export type { Note, CreateNote };
