import { useEffect, useState } from "react";
import SideNavigationBar from "./SideNavigationBar.jsx";
import TopNavigationBar from "./TopNavigationBar.jsx";

export default function NavigationBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 768;
      setIsMobile(isMobile);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div>
      {isMobile && (
        <>
          <TopNavigationBar></TopNavigationBar>
          <SideNavigationBar></SideNavigationBar>
        </>
      )}
    </div>
  );
}
