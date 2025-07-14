import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaUserPlus, FaFilePdf, FaFileWord, FaFilePowerpoint, FaFileExcel, FaFileImage, FaUnlock, FaLock, FaSignature, FaEraser, FaBalanceScale, FaFileAlt, FaFileArchive, FaFileMedical, FaFileContract, FaRegFilePdf, FaRegFileImage, FaRegFileWord, FaRegFilePowerpoint, FaRegFileExcel, FaRegFileCode, FaRegFile, FaCut, FaCogs, FaSearch, FaSyncAlt, FaEdit, FaCompress, FaWater, FaCrop, FaListOl } from "react-icons/fa";
import { MdOutlineRotate90DegreesCcw } from "react-icons/md";

const Header = ({ onSignIn = () => {}, onSignUp = () => {} }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [convertMenuOpen, setConvertMenuOpen] = useState(false);
  const [convertMenuHover, setConvertMenuHover] = useState(false);
  const [allToolsMenuOpen, setAllToolsMenuOpen] = useState(false);
  const [allToolsMenuHover, setAllToolsMenuHover] = useState(false);

  const convertTo = [
    { label: "JPG to PDF", icon: <FaFileImage className="text-yellow-400" />, to: "/jpg-to-pdf" },
    { label: "WORD to PDF", icon: <FaFileWord className="text-blue-500" />, to: "/word-to-pdf" },
    { label: "POWERPOINT to PDF", icon: <FaFilePowerpoint className="text-red-400" />, to: "/powerpoint-to-pdf" },
    { label: "EXCEL to PDF", icon: <FaFileExcel className="text-green-500" />, to: "/excel-to-pdf" },
    { label: "HTML to PDF", icon: <FaFilePdf className="text-yellow-500" />, to: "/html-to-pdf" },
  ];
  const convertFrom = [
    { label: "PDF to JPG", icon: <FaFileImage className="text-yellow-400" />, to: "/pdf-to-jpg" },
    { label: "PDF to WORD", icon: <FaFileWord className="text-blue-500" />, to: "/pdf-to-word" },
    { label: "PDF to POWERPOINT", icon: <FaFilePowerpoint className="text-red-400" />, to: "/pdf-to-powerpoint" },
    { label: "PDF to EXCEL", icon: <FaFileExcel className="text-green-500" />, to: "/pdf-to-excel" },
    { label: "PDF to PDF/A", icon: <FaFilePdf className="text-blue-400" />, to: "/pdf-to-pdfa" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-10 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="h-14 w-auto" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden xl:flex gap-x-10 ml-10 text-base font-medium text-gray-700">
            <Link to="/merge-pdf" className="hover:text-primary">MERGE PDF</Link>
            <Link to="/split-pdf" className="hover:text-primary">SPLIT PDF</Link>
            <Link to="/compress-pdf" className="hover:text-primary">COMPRESS PDF</Link>
            <div
              className="relative group"
              onMouseEnter={() => setConvertMenuOpen(true)}
              onMouseLeave={() => setConvertMenuOpen(false)}
            >
              <button
                className={`hover:text-primary flex items-center gap-1 ${convertMenuOpen ? 'text-primary' : ''}`}
                onFocus={() => setConvertMenuOpen(true)}
                onBlur={() => setConvertMenuOpen(false)}
              >
                CONVERT PDF <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {/* Hover bridge to prevent accidental close */}
              {(convertMenuOpen || convertMenuHover) && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full h-4 w-full z-30"
                  onMouseEnter={() => setConvertMenuHover(true)}
                  onMouseLeave={() => setConvertMenuHover(false)}
                  style={{ pointerEvents: 'auto' }}
                />
              )}
              {(convertMenuOpen || convertMenuHover) && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white rounded-xl shadow-lg p-8 flex gap-12 z-30 min-w-[500px] border-t-2 border-primary animate-fade-in"
                  onMouseEnter={() => setConvertMenuHover(true)}
                  onMouseLeave={() => { setConvertMenuHover(false); setConvertMenuOpen(false); }}
                >
                  <div>
                    <div className="font-bold text-gray-500 mb-4">CONVERT TO PDF</div>
                    <ul className="space-y-3">
                      {convertTo.map(item => (
                        <li key={item.label}>
                          <Link to={item.to} className="flex items-center gap-2 hover:text-primary">
                            {item.icon}
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-bold text-gray-500 mb-4">CONVERT FROM PDF</div>
                    <ul className="space-y-3">
                      {convertFrom.map(item => (
                        <li key={item.label}>
                          <Link to={item.to} className="flex items-center gap-2 hover:text-primary">
                            {item.icon}
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => setAllToolsMenuOpen(true)}
              onMouseLeave={() => setAllToolsMenuOpen(false)}
            >
              <button
                className={`hover:text-primary flex items-center gap-1 ${allToolsMenuOpen ? 'text-primary' : ''}`}
                onFocus={() => setAllToolsMenuOpen(true)}
                onBlur={() => setAllToolsMenuOpen(false)}
              >
                ALL PDF TOOLS <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {/* Hover bridge to prevent accidental close */}
              {(allToolsMenuOpen || allToolsMenuHover) && (
                <div
                  className="absolute left-1/2 -translate-x-2/3 top-full h-4 w-full z-30"
                  onMouseEnter={() => setAllToolsMenuHover(true)}
                  onMouseLeave={() => setAllToolsMenuHover(false)}
                  style={{ pointerEvents: 'auto' }}
                />
              )}
              {(allToolsMenuOpen || allToolsMenuHover) && (
                <div
                  className="absolute left-1/2 -translate-x-2/3 mt-4 bg-white rounded-xl shadow-lg p-8 flex gap-10 z-30 min-w-[1200px] border-t-2 border-primary animate-fade-in"
                  onMouseEnter={() => setAllToolsMenuHover(true)}
                  onMouseLeave={() => { setAllToolsMenuHover(false); setAllToolsMenuOpen(false); }}
                >
                  {/* ORGANIZE PDF */}
                  <div>
                    <div className="font-bold text-gray-500 mb-4">ORGANIZE PDF</div>
                    <ul className="space-y-3">
                      <li><Link to="/merge-pdf" className="flex items-center gap-2 hover:text-primary"><FaFilePdf className="text-red-400" />Merge PDF</Link></li>
                      <li><Link to="/split-pdf" className="flex items-center gap-2 hover:text-primary"><FaCut className="text-red-400" />Split PDF</Link></li>
                      <li><Link to="/remove-pages" className="flex items-center gap-2 hover:text-primary"><FaEraser className="text-red-400" />Remove pages</Link></li>
                      <li><Link to="/extract-pages" className="flex items-center gap-2 hover:text-primary"><FaFileArchive className="text-red-400" />Extract pages</Link></li>
                      <li><Link to="/organize-pdf" className="flex items-center gap-2 hover:text-primary"><FaCogs className="text-red-400" />Organize PDF</Link></li>
                      <li><Link to="/scan-to-pdf" className="flex items-center gap-2 hover:text-primary"><FaFileMedical className="text-red-400" />Scan to PDF</Link></li>
                    </ul>
                  </div>
                  {/* OPTIMIZE PDF */}
                  <div>
                    <div className="font-bold text-gray-500 mb-4">OPTIMIZE PDF</div>
                    <ul className="space-y-3">
                      <li><Link to="/compress-pdf" className="flex items-center gap-2 hover:text-primary"><FaCompress className="text-green-500" />Compress PDF</Link></li>
                      <li><Link to="/repair-pdf" className="flex items-center gap-2 hover:text-primary"><FaSyncAlt className="text-green-500" />Repair PDF</Link></li>
                      <li><Link to="/ocr-pdf" className="flex items-center gap-2 hover:text-primary"><FaSearch className="text-green-500" />OCR PDF</Link></li>
                    </ul>
                  </div>
                  {/* CONVERT TO PDF */}
                  <div>
                    <div className="font-bold text-gray-500 mb-4">CONVERT TO PDF</div>
                    <ul className="space-y-3">
                      <li><Link to="/jpg-to-pdf" className="flex items-center gap-2 hover:text-primary"><FaFileImage className="text-yellow-400" />JPG to PDF</Link></li>
                      <li><Link to="/word-to-pdf" className="flex items-center gap-2 hover:text-primary"><FaFileWord className="text-blue-500" />WORD to PDF</Link></li>
                      <li><Link to="/powerpoint-to-pdf" className="flex items-center gap-2 hover:text-primary"><FaFilePowerpoint className="text-red-400" />POWERPOINT to PDF</Link></li>
                      <li><Link to="/excel-to-pdf" className="flex items-center gap-2 hover:text-primary"><FaFileExcel className="text-green-500" />EXCEL to PDF</Link></li>
                      <li><Link to="/html-to-pdf" className="flex items-center gap-2 hover:text-primary"><FaRegFileCode className="text-yellow-500" />HTML to PDF</Link></li>
                    </ul>
                  </div>
                  {/* CONVERT FROM PDF */}
                  <div>
                    <div className="font-bold text-gray-500 mb-4">CONVERT FROM PDF</div>
                    <ul className="space-y-3">
                      <li><Link to="/pdf-to-jpg" className="flex items-center gap-2 hover:text-primary"><FaFileImage className="text-yellow-400" />PDF to JPG</Link></li>
                      <li><Link to="/pdf-to-word" className="flex items-center gap-2 hover:text-primary"><FaFileWord className="text-blue-500" />PDF to WORD</Link></li>
                      <li><Link to="/pdf-to-powerpoint" className="flex items-center gap-2 hover:text-primary"><FaFilePowerpoint className="text-red-400" />PDF to POWERPOINT</Link></li>
                      <li><Link to="/pdf-to-excel" className="flex items-center gap-2 hover:text-primary"><FaFileExcel className="text-green-500" />PDF to EXCEL</Link></li>
                      <li><Link to="/pdf-to-pdfa" className="flex items-center gap-2 hover:text-primary"><FaFilePdf className="text-blue-400" />PDF to PDF/A</Link></li>
                    </ul>
                  </div>
                  {/* EDIT PDF */}
                  <div>
                    <div className="font-bold text-gray-500 mb-4">EDIT PDF</div>
                    <ul className="space-y-3">
                      <li><Link to="/rotate-pdf" className="flex items-center gap-2 hover:text-primary"><MdOutlineRotate90DegreesCcw className="text-purple-400" />Rotate PDF</Link></li>
                      <li><Link to="/add-page-numbers" className="flex items-center gap-2 hover:text-primary"><FaListOl className="text-purple-400" />Add page numbers</Link></li>
                      <li><Link to="/add-watermark" className="flex items-center gap-2 hover:text-primary"><FaWater className="text-purple-400" />Add watermark</Link></li>
                      <li><Link to="/crop-pdf" className="flex items-center gap-2 hover:text-primary"><FaCrop className="text-purple-400" />Crop PDF</Link></li>
                      <li><Link to="/edit-pdf" className="flex items-center gap-2 hover:text-primary"><FaEdit className="text-purple-400" />Edit PDF</Link></li>
                    </ul>
                  </div>
                  {/* PDF SECURITY */}
                  <div>
                    <div className="font-bold text-gray-500 mb-4">PDF SECURITY</div>
                    <ul className="space-y-3">
                      <li><Link to="/unlock-pdf" className="flex items-center gap-2 hover:text-primary"><FaUnlock className="text-blue-700" />Unlock PDF</Link></li>
                      <li><Link to="/protect-pdf" className="flex items-center gap-2 hover:text-primary"><FaLock className="text-blue-700" />Protect PDF</Link></li>
                      <li><Link to="/sign-pdf" className="flex items-center gap-2 hover:text-primary"><FaSignature className="text-blue-700" />Sign PDF</Link></li>
                      <li><Link to="/redact-pdf" className="flex items-center gap-2 hover:text-primary"><FaEraser className="text-blue-700" />Redact PDF</Link></li>
                      <li><Link to="/compare-pdf" className="flex items-center gap-2 hover:text-primary"><FaBalanceScale className="text-blue-700" />Compare PDF</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          {/* Desktop buttons */}
          <button className="text-gray-700 px-4 py-2 rounded hover:bg-gray-100 hidden xl:block" onClick={onSignIn}>Login</button>
          <button className="bg-primary text-white px-5 py-2 rounded hover:bg-primary/90 font-semibold hidden xl:block" onClick={onSignUp}>Sign up</button>
          {/* Mobile icon buttons */}
          <button className="text-primary p-2 rounded hover:bg-gray-100 xl:hidden" onClick={onSignIn} aria-label="Login">
            <FaUser className="text-xl" />
          </button>
          {/* <button className="bg-primary text-white p-2 rounded hover:bg-primary/90 font-semibold xl:hidden" onClick={onSignUp} aria-label="Sign up">
            <FaUserPlus className="text-xl" />
          </button> */}
          <button className="p-2 rounded hover:bg-gray-100 xl:hidden" onClick={() => setMobileMenuOpen(v => !v)} aria-label="Menu" aria-expanded={mobileMenuOpen}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-20 bg-white z-20 shadow-lg animate-slide-down overflow-y-auto">
          <nav className="flex flex-col gap-8 p-6 text-base font-medium text-gray-700">
            {/* ORGANIZE PDF */}
            <div>
              <div className="font-bold text-gray-500 mb-2">ORGANIZE PDF</div>
              <ul className="space-y-2">
                <li><Link to="/merge-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaFilePdf className="text-red-400" />Merge PDF</Link></li>
                <li><Link to="/split-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaCut className="text-red-400" />Split PDF</Link></li>
                <li><Link to="/remove-pages" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaEraser className="text-red-400" />Remove pages</Link></li>
                <li><Link to="/extract-pages" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaFileArchive className="text-red-400" />Extract pages</Link></li>
                <li><Link to="/organize-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaCogs className="text-red-400" />Organize PDF</Link></li>
                <li><Link to="/scan-to-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaFileMedical className="text-red-400" />Scan to PDF</Link></li>
              </ul>
            </div>
            {/* OPTIMIZE PDF */}
            <div>
              <div className="font-bold text-gray-500 mb-2">OPTIMIZE PDF</div>
              <ul className="space-y-2">
                <li><Link to="/compress-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaCompress className="text-green-500" />Compress PDF</Link></li>
                <li><Link to="/repair-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaSyncAlt className="text-green-500" />Repair PDF</Link></li>
                <li><Link to="/ocr-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaSearch className="text-green-500" />OCR PDF</Link></li>
              </ul>
            </div>
            {/* CONVERT TO PDF */}
            <div>
              <div className="font-bold text-gray-500 mb-2">CONVERT TO PDF</div>
              <ul className="space-y-2">
                <li><Link to="/jpg-to-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaFileImage className="text-yellow-400" />JPG to PDF</Link></li>
                <li><Link to="/word-to-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaFileWord className="text-blue-500" />WORD to PDF</Link></li>
                <li><Link to="/powerpoint-to-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaFilePowerpoint className="text-red-400" />POWERPOINT to PDF</Link></li>
                <li><Link to="/excel-to-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaFileExcel className="text-green-500" />EXCEL to PDF</Link></li>
                <li><Link to="/html-to-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaRegFileCode className="text-yellow-500" />HTML to PDF</Link></li>
              </ul>
            </div>
            {/* CONVERT FROM PDF */}
            <div>
              <div className="font-bold text-gray-500 mb-2">CONVERT FROM PDF</div>
              <ul className="space-y-2">
                <li><Link to="/pdf-to-jpg" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaFileImage className="text-yellow-400" />PDF to JPG</Link></li>
                <li><Link to="/pdf-to-word" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaFileWord className="text-blue-500" />PDF to WORD</Link></li>
                <li><Link to="/pdf-to-powerpoint" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaFilePowerpoint className="text-red-400" />PDF to POWERPOINT</Link></li>
                <li><Link to="/pdf-to-excel" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaFileExcel className="text-green-500" />PDF to EXCEL</Link></li>
                <li><Link to="/pdf-to-pdfa" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaFilePdf className="text-blue-400" />PDF to PDF/A</Link></li>
              </ul>
            </div>
            {/* EDIT PDF */}
            <div>
              <div className="font-bold text-gray-500 mb-2">EDIT PDF</div>
              <ul className="space-y-2">
                <li><Link to="/rotate-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><MdOutlineRotate90DegreesCcw className="text-purple-400" />Rotate PDF</Link></li>
                <li><Link to="/add-page-numbers" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaListOl className="text-purple-400" />Add page numbers</Link></li>
                <li><Link to="/add-watermark" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaWater className="text-purple-400" />Add watermark</Link></li>
                <li><Link to="/crop-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaCrop className="text-purple-400" />Crop PDF</Link></li>
                <li><Link to="/edit-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaEdit className="text-purple-400" />Edit PDF</Link></li>
              </ul>
            </div>
            {/* PDF SECURITY */}
            <div>
              <div className="font-bold text-gray-500 mb-2">PDF SECURITY</div>
              <ul className="space-y-2">
                <li><Link to="/unlock-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaUnlock className="text-blue-700" />Unlock PDF</Link></li>
                <li><Link to="/protect-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaLock className="text-blue-700" />Protect PDF</Link></li>
                <li><Link to="/sign-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaSignature className="text-blue-700" />Sign PDF</Link></li>
                <li><Link to="/redact-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaEraser className="text-blue-700" />Redact PDF</Link></li>
                <li><Link to="/compare-pdf" className="flex items-center gap-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}><FaBalanceScale className="text-blue-700" />Compare PDF</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 