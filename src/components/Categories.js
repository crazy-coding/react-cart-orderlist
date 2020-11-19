import React from "react";
import { categories } from "./../data";

export default function Categories(props) {
  return (
    <div className="mt-2">
      <ul className="list-unstyled text-info">
        {categories.map((e) => (
          <li
            key={e.key}
            onClick={() => {
              props.selectCategoryHandler(e.key);
            }}
            role="button"
            className={`text-left py-2 px-3 border-bottom border-right
              ${e.key == props.active ? " bg-light text-primary" : ""}`}
          >
            {e.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
