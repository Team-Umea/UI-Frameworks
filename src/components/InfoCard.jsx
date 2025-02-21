import SmallInfoCard from "./SmallInfoCard";
import { GiAcid } from "react-icons/gi";
import { GiAnchor } from "react-icons/gi";
import { GiAmmoniteFossil } from "react-icons/gi";

export default function InfoCard({ heading, subHeading, type }) {
  return (
    <div>
      <div>
        <h1>{heading}</h1>
        <h3>{subHeading}</h3>
      </div>

      {type == 1 ? (
        <div>
          <SmallInfoCard
            icon={<GiAcid size={24} />}
            heading={"Experimental features"}
            subHeading={
              "You can always trust us with your money we make the coolest experimental feature"
            }
          ></SmallInfoCard>
          <SmallInfoCard
            icon={<GiAnchor size={24} />}
            heading={"Selling boat"}
            subHeading={"We also sell som eboats sometimes i think"}
          ></SmallInfoCard>
          <SmallInfoCard
            icon={<GiAmmoniteFossil size={24} />}
            heading={"Found some cool shells"}
            subHeading={"I found some cool shells that i wanted to show"}
          ></SmallInfoCard>
        </div>
      ) : (
        <div>
          <SmallInfoCard
            icon={<GiAcid size={24} />}
            heading={"Experimental features"}
            subHeading={
              "You can always trust us with your money we make the coolest experimental feature"
            }
          ></SmallInfoCard>
          <SmallInfoCard
            icon={<GiAnchor size={24} />}
            heading={"Selling boat"}
            subHeading={"We also sell som eboats sometimes i think"}
          ></SmallInfoCard>
          <SmallInfoCard
            icon={<GiAmmoniteFossil size={24} />}
            heading={"Found some cool shells"}
            subHeading={"I found some cool shells that i wanted to show"}
          ></SmallInfoCard>
        </div>
      )}
    </div>
  );
}
