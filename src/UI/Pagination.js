import React from "react";
import classes from "./Pagination.module.css";

export default function Pagination({
  heroesPerPage,
  totalHeroes,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHeroes / heroesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={classes.paginateContainer}>
      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={classes.paginateItem}
            onClick={() => paginate(number)}
          >
            <a
              href="#"
              className={currentPage == number ? `${classes.activePage}` : ""}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
