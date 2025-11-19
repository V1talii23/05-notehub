import css from './NoteList.module.css';
import type { Note } from '../../types/note';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { KEY } from '../App/App';
import { deleteNote } from '../../services/noteService';

interface NoteListProps {
  notes: Note[];
}

function NoteList({ notes }: NoteListProps) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id: Note['id']) => deleteNote(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [KEY] }),
  });

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <button
              disabled={isPending}
              onClick={() => mutate(note.id)}
              className={css.button}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
      <li></li>
    </ul>
  );
}

export default NoteList;
