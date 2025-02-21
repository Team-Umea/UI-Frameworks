export default function ListComponent({ title, two, three, four }) {
  return (
    <>
      <section>
        <ul>
          <li>
            <p className="text-lg font-semibold">{title}</p>
          </li>
          <li>
            <p>{two}</p>
          </li>
          <li>
            <p>{three}</p>
          </li>
          <li>
            <p>{four}</p>
          </li>
        </ul>
      </section>
    </>
  );
}
