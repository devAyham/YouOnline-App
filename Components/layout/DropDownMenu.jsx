import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "styles/Components/drobdown.module.scss";
import country from "/public/Assets/Images/3.png";

const menuItems = [
  {
    submenu: [
      {
        title: "UAE",
        submenu: [
          {
            title: "Abo Dabi",
          },
          {
            title: "Dubai",
          },
        ],
      },
      {
        title: "UAE",
        submenu: [
          {
            title: "Abo Dabi",
          },
          {
            title: "Dubai",
          },
        ],
      },
      {
        title: "UAE",
        submenu: [
          {
            title: "Abo Dabi",
          },
          {
            title: "Dubai",
          },
        ],
      },
    ],
  },
];

const DrobDownMenu = ({ location, setlocation }) => {
  return (
    <nav>
      <ul className={styles.menus}>
        {menuItems.map((menu, index) => {
          return (
            <MenuItems
              location={location}
              setlocation={setlocation}
              items={menu}
              key={index}
              depthLevel={0}
            />
          );
        })}
      </ul>
    </nav>
  );
};

const MenuItems = ({ items, depthLevel, location, setlocation }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className={styles.menuItems}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            {depthLevel > 0 ? (
              <span> &raquo; </span>
            ) : (
              <span className={styles.arrow} />
            )}
          </button>
          <Dropdown
            location={location}
            setlocation={setlocation}
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <div
          onClick={() => {
            setlocation(items.title);
          }}
        >
          {" "}
          {items.title}{" "}
        </div>
      )}
    </li>
  );
};
const Dropdown = ({location , setlocation, submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? styles.dropdownSubmenu : "";
  return (
    <ul
      className={`${styles.dropdown} ${dropdownClass} ${
        dropdown ? styles.show : ""
      }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems
          location={location}
          setlocation={setlocation}
          items={submenu}
          key={index}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
};

export default DrobDownMenu;
