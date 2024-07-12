import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

TextExpander.propTypes = {
  children: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  className: PropTypes.string,
};

function TextExpander({
  children,
  expanded = false,
  collapsedNumWords = 20,
  expandButtonText = "Show text",
  collapseButtonText = "Collapse text",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(expanded);

  const truncateText = (text, numWords) => {
    const wordsArray = text.split(" ");
    if (wordsArray.length <= numWords) {
      return text;
    }
    return wordsArray.slice(0, numWords).join(" ") + "...";
  };

  const handleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      {isOpen ? children : truncateText(children, collapsedNumWords)}
      <button onClick={handleExpand}>
        {isOpen ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
