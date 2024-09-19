export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-bruh">
        <a href="" className="nav_item">Home</a>
        <a href="" className="nav_item">Projects</a>
        <a href="" className="nav_item">About</a>
        <a href="" className="nav_item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  );
};
