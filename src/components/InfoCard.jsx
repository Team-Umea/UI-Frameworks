import SmallInfoCard from "./SmallInfoCard";
import { GiAcid } from "react-icons/gi";
import { GiAnchor } from "react-icons/gi";
import { GiAmmoniteFossil } from "react-icons/gi";
import { GiArmBandage } from "react-icons/gi";
import { FaDog } from "react-icons/fa";
import { BiFork } from "react-icons/bi";

export default function InfoCard({ heading, subHeading, type }) {
  return (
    <div className="flex flex-col items-center p-8 mb-24">
      <div className="pb-5 items-center text-center mb-6">
        <h1 className="text-slate-700 text-2xl font-bold">{heading}</h1>
        <h3 className="text-slate-600 text-xl">{subHeading}</h3>
      </div>

      {type === 1 ? (
        <div className="flex flex-row">
          <SmallInfoCard
            icon={<GiAcid size={32} />}
            heading={"Experimental features"}
            subHeading={
              "You can always trust us with your money we make the coolest experimental feature"
            }
          ></SmallInfoCard>
          <SmallInfoCard
            icon={<GiAnchor size={32} />}
            heading={"Selling boat"}
            subHeading={"We also sell som eboats sometimes i think"}
          ></SmallInfoCard>
          <SmallInfoCard
            icon={<GiAmmoniteFossil size={32} />}
            heading={"Found some cool shells"}
            subHeading={"I found some cool shells that i wanted to show"}
          ></SmallInfoCard>
        </div>
      ) : (
        <div className="flex flex-row">
          <SmallInfoCard
            icon={<GiArmBandage size={32} />}
            heading={"Great feature"}
            subHeading={
              "Sell us your bodyparts we pa the best prices in business industry"
            }
          ></SmallInfoCard>
          <SmallInfoCard
            icon={<FaDog size={32} />}
            heading={"Cool dog"}
            subHeading={"I once saw a cool dog theres a picture of him above"}
          ></SmallInfoCard>
          <SmallInfoCard
            icon={<BiFork size={32} />}
            heading={"Gaffel"}
            subHeading={"Gaffel"}
          ></SmallInfoCard>
        </div>
      )}
    </div>
  );
}
