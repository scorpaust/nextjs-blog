import { ReactNode } from "react";
import MainNavigation from "./main-navigation";

type Props = {
  children: ReactNode | ReactNode[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
