import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackButton() {
  const router = useRouter();
  const isBasePath = router.pathname === "/";

  const handleClick = () => {
    router.back();
  };

  return (
    !isBasePath && (
      <a onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </a>
    )
  );
}
