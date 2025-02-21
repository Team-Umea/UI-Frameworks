import { GoRocket } from "react-icons/go";
import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <nav className="border-b-[1px] flex justify-between items-center px-16 py-3">
      <span className="flex gap-x-2 m-0">
        <GoRocket size={20} />
        <p className="font-semibold m-0">RocketApp</p>
      </span>
      <div className="hidden md:flex items-center gap-x-4">
        <p className="m-0">Features</p>
        <p className="m-0">Pricing</p>
        <p className="m-0">About</p>
        <p className="m-0">Contact</p>
      </div>
      <div className="flex gap-x-4">
        <Button
          variant="outlined"
          style={{
            color: "#000000",
            borderColor: "#000000",
            "&:hover": {
              color: "#d6d4d4",
            },
            whiteSpace: "nowrap",
          }}
        >
          Sign in
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#000000",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#333333",
            },
            whiteSpace: "nowrap",
          }}
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
}
