export default function SmallInfoCard({ icon, heading, subHeading }) {
  return (
    <div className="flex flex-col mx-7">
      {icon}
      <div>
        <h2 className="text-xl font-semibold text-slate-700">{heading}</h2>
        <h3 className="text-xl text-slate.600">{subHeading}</h3>
      </div>
    </div>
  );
}
