import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-white text-lg font-semibold mb-4">
              Online Fraud Detection and Education
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              justo vitae urna tincidunt cursus.
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@frauddetection.com</p>
            <p className="text-gray-400">Phone: 123-456-7890</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-200">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-200">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="mt-8">
                <p className="text-center text-gray-400">© 2022 Online Fraud Detection and Education. All rights reserved.</p>
            </div> */}


      </div>
      <div className="bg-gray-800 py-4 text-white text-center">
          <div className="container mx-auto">
            &copy; {new Date().getFullYear()} Citizen Safety App. All rights
            reserved.
          </div>
        </div>
    </footer>
  );
};

export default Footer;
