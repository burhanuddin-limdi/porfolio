import React from "react";
import "./questionLines.css";

export const QuestionLines: React.FC = () => {
  return (
    <svg
      className="h-[200px] fixed z-20 top-[31vh] right-[43.5vw]"
      viewBox="0 0 800 205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="question-arrow"
        className="arrow-in"
        d="M798 44L797.114 41.856C788.091 20.0255 767.966 4.78233 744.507 2.00995V2.00995C733.423 0.70004 722.193 2.7427 712.279 7.86727V7.86727C694.304 17.1574 683 35.7078 683 55.9412V62.9557C683 76.4135 688.425 89.3031 698.049 98.7105L712.451 112.789C722.075 122.197 727.5 135.086 727.5 148.544V165.25V188.5C727.5 196.508 733.992 203 742 203V203C750.008 203 756.5 196.508 756.5 188.5V186.448C756.5 177.347 749.153 169.954 740.052 169.897L0 165.25"
        stroke="#FF5C00"
        strokeWidth="3"
      />
    </svg>
  );
};
