export default function SmallInfoCard({ icon, heading, subHeading }) {
  return (
    <div className="">
      {icon}
      <div>
        <h2>{heading}</h2>
        <h3>{subHeading}</h3>
      </div>
    </div>
  );
}
