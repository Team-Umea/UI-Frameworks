export default function ListComponent({ title, two, three, four }) {
  const baseClass = "text-gray-600";

  return (
    <>
      <section>
        <ul>
          <li>
            <p className="text-lg font-semibold">{title}</p>
          </li>
          <li>
            <p className={baseClass}>{two}</p>
          </li>
          <li>
            <p className={baseClass}>{three}</p>
          </li>
          <li>
            <p className={baseClass}>{four}</p>
          </li>
        </ul>
      </section>
    </>
  );
}
