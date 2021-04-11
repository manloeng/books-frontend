// import Link from "next/link";
import navigationStyles from "../../../../styles/Nav.module.css";
import BackButton from "./BackButton";

export default function TopNavigationBar() {
  return (
    <nav className={navigationStyles.topnav}>
      <div>
        <BackButton></BackButton>
      </div>
    </nav>
  );
}
