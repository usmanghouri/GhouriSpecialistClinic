export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
          Ghouri <span className="text-teal-500">Specialist Clinic</span>
        </h3>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Providing compassionate, specialized, and accessible healthcare to our community.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#services" className="hover:text-teal-400 transition-colors">Services</a>
          <a href="#doctors" className="hover:text-teal-400 transition-colors">Specialists</a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ghouri Specialist Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
