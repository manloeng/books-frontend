import Link from "next/link";
import styles from "../../../styles/Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faListAlt } from "@fortawesome/free-solid-svg-icons";

export default function SideNavigationBar() {
  // const content = ["Home", "List", "Page", "Login"]; - map through instead
  return (
    <nav className={styles.sidenav}>
      <div>
        <h3>Book Store</h3>
      </div>

      <div>
        <Link href="/">
          <a>
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          </a>
        </Link>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/search">
          <a>
            <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon>
          </a>
        </Link>
        <a href="/search">Search</a>
      </div>
    </nav>
  );
}
