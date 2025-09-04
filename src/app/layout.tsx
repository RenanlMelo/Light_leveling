import React from "react";
import { Route_Tracker } from "../routing/RouteTracker";
import Header from "../components/Comum_components/Header";
import Footer from "../components/Comum_components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Route_Tracker />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
