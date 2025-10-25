const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Frontend Learning Lab</h3>
            <p className="text-gray-400">Learn HTML, CSS, Bootstrap, and JavaScript offline</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">About</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 Frontend Learning Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
