import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

import Header from "./Header";
import Editor from "./Editor";
import Result from "./Result";

const Home = () => {
  const { html, setHtml, css, setCss, javascript, setJavascript } =
    useContext(DataContext);

  return (
    <>
      <Header />
      <div className="bg-black   flex space-x-3  ">
        <Editor value={html} onChange={setHtml} heading="HTML" />
        <Editor value={css} onChange={setCss} heading="CSS" />
        <Editor value={javascript} onChange={setJavascript} heading="JS" />
      </div>
      <Result />
    </>
  );
};

export default Home;
