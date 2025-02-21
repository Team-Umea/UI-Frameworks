import ListComponent from "./ListComponent";
import { GoRocket } from "react-icons/go";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="grid grid-cols-4 gap-4 gap-x-12 p-10">
      <span className="flex gap-x-2 m-0">
        <GoRocket size={30} />
        <p className="font-semibold m-1">RocketApp</p>
      </span>

      <ListComponent
        title="Product"
        two="Features"
        three="Pricing"
        four="Documentation"
      />

      <ListComponent title="Company" two="About" three="Careers" four="Blog" />

      <section>
        <p className="font-semibold m-1">Connect</p>
        <span className="flex gap-x-2 m-0">
          <FaTwitter className="text-gray-600" size={20} />
          <FaGithub className="text-gray-600" size={20} />
          <FaLinkedin className="text-gray-600" size={20} />
        </span>
      </section>
    </footer>
  );
}
