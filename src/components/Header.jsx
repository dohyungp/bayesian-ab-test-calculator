import React from "react";

export const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header-inner">
        <div className="title">
          <a href="/">
            <span role="img" aria-label="dice">
              🎲
            </span>
            Bayesian A/B Testing Calculator
          </a>
        </div>
      </div>
    </header>
  );
};
