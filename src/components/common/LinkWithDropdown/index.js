import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "./linkwithdropdown.css";

const LinkWithDropDown = ({ label, link, data, columns }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeDropdown = () => setIsOpen(false);

  if (link) {
    return (
      <a className="link" href={link}>
        {label || "Click me"}
      </a>
    );
  }
  if (data && data.length > 0) {
    const rows = [];
    for (let i = 0; i < data.length; i += columns) {
      const row = data.slice(i, i + columns);
      rows.push(row);
    }

    return (
      <div className="dropdown-container" onMouseLeave={closeDropdown}>
        <div className={`dropdown ${isOpen ? "open" : ""}`}>
          <div>
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((item, columnIndex) => (
                  <div key={columnIndex} className="column">
                    <p>{item}</p>
                    <span className="chevron">
                      <ChevronRightIcon />
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <a className="dropdown-link" onMouseEnter={toggleDropdown}>
          {label || "Hover me"}
        </a>
      </div>
    );
  }

  return null;
};

LinkWithDropDown.defaultProps = {
  link: null,
  data: [],
  columns: 1,
};

LinkWithDropDown.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
  columns: PropTypes.number,
};

export default LinkWithDropDown;