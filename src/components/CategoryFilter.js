import React from "react";

function CategoryFilter({ categories, categoryList, handleFilter }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          value={category}
          key={category}
          className={category === categoryList ? "selected" : null}
          onClick={handleFilter}
        >
          {category}{" "}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
