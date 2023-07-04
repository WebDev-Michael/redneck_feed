const Dropdown = ({ submenu, dropdown }) => {
    return (
      <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
        {submenu.map((submenu, index) => (
          <li key={index} className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;