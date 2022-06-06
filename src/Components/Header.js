export default function Header() {
  return (
      <header className="text-black bg-white drop-shadow-md">
        <div className="relative h-20 flex items-center justify-between p-10">
          {/* logo */}
          <div className="cursor-pointer text-gray-900">
          <img className="mx-auto h-12 w-auto" src="https://cdn.dribbble.com/users/434375/screenshots/16798272/media/eadadc738a83c444fea86fca0b385051.jpg?compress=1&resize=1200x900&vertical=top" alt="Workflow"></img>
      
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 p-2 text-white font-semibold rounded-md px-6">Sign Up</button>
        </div>
      </header>
  );
}
