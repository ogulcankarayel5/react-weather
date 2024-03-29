import * as React from "react";

function SvgUpArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M374.176 110.386l-104-104.504-.019-.018c-7.818-7.832-20.522-7.807-28.314.002l-.019.018-104 104.504c-7.791 7.829-7.762 20.493.068 28.285 7.829 7.792 20.492 7.762 28.284-.067L236 68.442V492c0 11.046 8.954 20 20 20s20-8.954 20-20V68.442l69.824 70.162c7.792 7.829 20.455 7.859 28.284.067 7.831-7.793 7.858-20.457.068-28.285z" />
    </svg>
  );
}

export default SvgUpArrow;
