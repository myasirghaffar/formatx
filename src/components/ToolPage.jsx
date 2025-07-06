import { FaCloudUploadAlt } from "react-icons/fa";

const ToolPage = ({ title, desc, button }) => (
  <main className="flex flex-col items-center justify-center min-h-[70vh] bg-[#f7f6fb] py-16">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">{title}</h1>
    <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">{desc}</p>
    <div className="flex flex-col items-center">
      <button className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-white text-xl font-semibold px-10 py-5 rounded-lg shadow mb-2 transition-all">
        <FaCloudUploadAlt className="text-2xl" />
        {button}
      </button>
      <span className="text-gray-500 mt-2">or drop files here</span>
    </div>
  </main>
);

export default ToolPage; 