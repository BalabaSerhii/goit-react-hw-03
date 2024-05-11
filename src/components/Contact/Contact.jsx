import css from "./Contact.module.css";

export default function Contact({
  clients: { id, name, number },
  deleteContact,
}) {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button className={css.btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
}
