import css from "./Contact.module.css";

export default function Contact({ clients }) {
  return (
    <div>
      {clients.map(({ id, name, number }) => (
        <div key={id} className={css.client}>
          <p>{name}</p>
          <p>{number}</p>
          <button className={css.btn}>Delet</button>
        </div>
      ))}
    </div>
  );
}
