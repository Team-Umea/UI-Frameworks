import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";

export default function GetStartedSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-y-12 py-24 text-white bg-black">
      <Typography variant="h2" style={{ fontSize: "2.5rem" }}>
        Ready to Get Started?
      </Typography>
      <Typography
        variant="h3"
        style={{ fontSize: "1rem" }}
        className="text-gray-400 text-center px-[30%]"
      >
        Join thousands of satisfied customers building the future with RocketApp
      </Typography>
      <Button
        variant="contained"
        size="large"
        style={{
          backgroundColor: "#ffffff",
          color: "#000",
          "&:hover": {
            backgroundColor: "#c1c0bf",
          },
          whiteSpace: "nowrap",
        }}
      >
        Get Started
      </Button>
    </section>
  );
}
