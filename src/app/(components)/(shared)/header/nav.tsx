import Link from "next/link";

export type NavProps = {
  onLinkClick?: () => void;
};

const Nav: React.FC<NavProps> = ({ onLinkClick }) => {
  const navList = [
    { name: "Products 1", path: "/products1" },
    { name: "Products 2", path: "/products2" },
    { name: "Demo", path: "/demo" },
  ];

  return (
    <nav aria-label="Main Navigation">
      <ul className="flex flex-col lg:flex-row">
        {navList.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              onClick={onLinkClick}
              className="block px-3 py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
