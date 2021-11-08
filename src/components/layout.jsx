import React from "react";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import "./style.css";
import "./reset.css";

export const Layout = ({ children }) => {
  return(
  <>
  <Header />
  { children }
  <Footer />
  </>
  )
}