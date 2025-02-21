import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function () {
  return (
    <div className="flex flex-col justify-center items-center gap-y-8 h-screen text-center">
      <Typography variant="h1" style={{ fontSize: "3.5rem" }}>
        Launch Your Next Big Idea
      </Typography>
      <Typography
        variant="h3"
        style={{ fontSize: "1.3rem" }}
        className="text-gray-400 px-[10%]"
      >
        Transform your vision reality with our powerful platform. Build, scale,
        and grow faster than ever.
      </Typography>
      <div className="flex gap-x-4">
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
          Start Free Trial
        </Button>
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
          Watch Demo
        </Button>
      </div>
    </div>
  );
}
