import { css } from "@emotion/css";
import { SidebarLeft } from "../../components/SidebarLeft/Sidebar_left";

export default function CompIndex() {
  return (
    <main
      className={css`
        min-height: calc(100vh - 6rem);
      `}
    >
      <SidebarLeft />
    </main>
  );
}
