import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "word") {
      navigate('/wordpage');
    } else if (tab === "para") {
      navigate('/parapage');
    }
  };

  return (
    <div>
      <h1>Text Analyzer</h1>
      <p>The Analyzer is a simple free online tool for SEO web content analyzer that helps you find most frequent phrases and words, numbers of characters words, sentences and paragraphs, and estimated read and speak time of your content.</p>
      <div id="tab-containeer">
        <div className={activeTab === "word" ? "active" : ""} onClick={() => handleTabClick("word")}>Word Input</div>
        <div className={activeTab === "para" ? "active" : ""} onClick={() => handleTabClick("para")}>Paragraph</div>
      </div>
    </div>
  );
}

export default Home;
