import React from "react";

export const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header-inner">
        <div className="title">
          <a href="/bayesian-ab-test-calculator">
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
