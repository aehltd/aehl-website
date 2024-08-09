import { useRouter } from "next/router";
import NavBar from "./NavBar";
import IRBar from "./IRBar";

export default function FullNavBar() {
  const router = useRouter();
  const current = router.pathname;
  const isIRSection = current.startsWith("/ir");

  console.log(current);
  
  return (
    <nav>
      <NavBar current={current} isIRSection={isIRSection} />
      {isIRSection && <IRBar current={current} />}
    </nav>
  );
}
