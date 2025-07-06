import React from "react";
import { Link } from "react-router-dom";
import NotFoundSVG from "../assets/svg/NotFoundSVG";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
    <NotFoundSVG width={320} height={220} />
    <h2 className="text-2xl font-bold text-gray-700 mt-6 mb-2">Oops! Page not found</h2>
    <p className="text-gray-500 mb-6">The page you are looking for doesn't exist or is unavailable.</p>
    <Link to="/" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 font-semibold transition">Go to Home</Link>
  </div>
);

export default NotFound; 