import css from './NoteList.module.css';
import type { Note } from '../../types/notes';

interface NoteListProps {
  notes: Note[];
}

const id = 'note';

function NoteList({ notes }: NoteListProps) {
  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} id={id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <button className={css.button}>Delete</button>
          </div>
        </li>
      ))}
      <li></li>
    </ul>
  );
}

export default NoteList;

// const el = document.getElementById('note');

// const height = el?.clientHeight
// const weight = el?.clientWidth

// el?.addEventListener('mousemove', handleMove)

// function handleMove(e) {
//   const xVal = e.layerX;
//   const yVal = e.layerY;
// const yRotation
// }
