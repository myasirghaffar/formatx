import { Link } from "react-router-dom";
import {
  FaFilePdf,
  FaFileWord,
  FaFilePowerpoint,
  FaFileExcel,
  FaFileImage,
  FaFileSignature,
  FaWater,
  FaSyncAlt,
  FaEdit,
  FaCompress,
  FaFileAlt,
} from "react-icons/fa";
import { MdOutlineRotate90DegreesCcw } from "react-icons/md";

const tools = [
  {
    title: "Merge PDF",
    desc: "Combine PDFs in the order you want with the easiest PDF merger available.",
    icon: FaFilePdf,
    path: "merge-pdf",
    iconColor: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    title: "Split PDF",
    desc: "Separate one page or a whole set for easy conversion into independent PDF files.",
    icon: FaFilePdf,
    path: "split-pdf",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    title: "Compress PDF",
    desc: "Reduce file size while optimizing for maximal PDF quality.",
    icon: FaCompress,
    path: "compress-pdf",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    title: "PDF to Word",
    desc: "Easily convert your PDF files into easy to edit DOC and DOCX documents.",
    icon: FaFileWord,
    path: "pdf-to-word",
    iconColor: "text-blue-700",
    bgColor: "bg-blue-100",
  },
  {
    title: "PDF to PowerPoint",
    desc: "Turn your PDF files into easy to edit PPT and PPTX slideshows.",
    icon: FaFilePowerpoint,
    path: "pdf-to-powerpoint",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-100",
  },
  {
    title: "PDF to Excel",
    desc: "Pull data straight from PDFs into Excel spreadsheets in a few short seconds.",
    icon: FaFileExcel,
    path: "pdf-to-excel",
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Word to PDF",
    desc: "Make DOC and DOCX files easy to read by converting them to PDF.",
    icon: FaFileWord,
    path: "word-to-pdf",
    iconColor: "text-blue-700",
    bgColor: "bg-blue-100",
  },
  {
    title: "PowerPoint to PDF",
    desc: "Make PPT and PPTX slideshows easy to view by converting them to PDF.",
    icon: FaFilePowerpoint,
    path: "powerpoint-to-pdf",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Excel to PDF",
    desc: "Make EXCEL spreadsheets easy to read by converting them to PDF.",
    icon: FaFileExcel,
    path: "excel-to-pdf",
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Edit PDF",
    desc: "Add text, images, shapes or freehand annotations to a PDF document.",
    icon: FaEdit,
    path: "edit-pdf",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    title: "PDF to JPG",
    desc: "Convert each PDF page into a JPG or extract all images contained in a PDF.",
    icon: FaFileImage,
    path: "pdf-to-jpg",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-100",
  },
  {
    title: "JPG to PDF",
    desc: "Convert JPG images to PDF in seconds. Easily adjust orientation and margins.",
    icon: FaFileImage,
    path: "jpg-to-pdf",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    title: "Sign PDF",
    desc: "Sign yourself or request electronic signatures from others.",
    icon: FaFileSignature,
    path: "sign-pdf",
    iconColor: "text-amber-700",
    bgColor: "bg-amber-100",
  },
  {
    title: "Watermark",
    desc: "Stamp an image or text over your PDF in seconds.",
    icon: FaWater,
    path: "watermark",
    iconColor: "text-gray-500",
    bgColor: "bg-gray-200",
  },
  {
    title: "Rotate PDF",
    desc: "Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!",
    icon: MdOutlineRotate90DegreesCcw,
    path: "rotate-pdf",
    iconColor: "text-red-500",
    bgColor: "bg-red-100",
  },
];

const ToolsGrid = () => (
  <section className="py-12 bg-[#f7f6fb] bg-opacity-50 text-center border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              to={`/${tool.path}`}
              key={tool.title}
              className="group relative bg-white hover:bg-green-50 p-6 rounded-sm shadow hover:shadow-lg transition-shadow flex flex-col items-left text-left cursor-pointer border-2 border-white hover:border-green-600"
            >
              <div
                className={`w-12 h-12 ${tool.bgColor} group-hover:bg-green-100 rounded-lg flex items-center justify-center mb-4 transition-colors duration-200`}
              >
                <Icon
                  className={`h-6 w-6 ${tool.iconColor} group-hover:text-green-600 transition-colors duration-200`}
                />
              </div>
              {["rotate-pdf", "watermark"].includes(tool.path) && (
                <span className="absolute top-2 right-2 text-xs text-green-600 font-bold bg-green-100 px-2 py-1 rounded-full border border-green-600 z-10">
                  New Tool
                </span>
              )}
              <h3 className="text-base font-semibold mb-2">{tool.title}</h3>
              <p className="text-xs text-gray-600">{tool.desc}</p>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default ToolsGrid;
