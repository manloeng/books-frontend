import Link from "next/link";
import navigationStyles from "../../../../styles/Nav.module.css";
import BackButton from "./BackButton";

export default function TopNavigationBar() {
  return (
    <nav className={navigationStyles.topnav}>
      <div>
        <BackButton></BackButton>
      </div>
      <div className={navigationStyles.navContent}>
        <Link href="https://github.com/manloeng">Andrew's Git</Link>
      </div>
    </nav>
  );
}
