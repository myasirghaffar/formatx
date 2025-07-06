import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ToolsGrid from "./components/ToolsGrid";
import SolutionsSection from "./components/SolutionsSection";
import TrustedBySection from "./components/TrustedBySection";
import PremiumSection from "./components/PremiumSection";
import Footer from "./components/Footer";
import ToolPage from "./components/ToolPage";
import AuthModal from "./components/AuthModal";
import { useEffect } from "react";
import NotFound from "./components/NotFound";

const toolRoutes = [
  { path: "merge-pdf", title: "Merge PDF files", desc: "Combine PDFs in the order you want with the easiest PDF merger available.", button: "Select PDF files" },
  { path: "split-pdf", title: "Split PDF files", desc: "Separate one page or a whole set for easy conversion into independent PDF files.", button: "Select PDF files" },
  { path: "compress-pdf", title: "Compress PDF files", desc: "Reduce file size while optimizing for maximal PDF quality.", button: "Select PDF files" },
  { path: "pdf-to-word", title: "PDF to Word", desc: "Easily convert your PDF files into easy to edit DOC and DOCX documents.", button: "Select PDF files" },
  { path: "pdf-to-powerpoint", title: "PDF to PowerPoint", desc: "Turn your PDF files into easy to edit PPT and PPTX slideshows.", button: "Select PDF files" },
  { path: "pdf-to-excel", title: "PDF to Excel", desc: "Pull data straight from PDFs into Excel spreadsheets in a few short seconds.", button: "Select PDF files" },
  { path: "word-to-pdf", title: "Word to PDF", desc: "Make DOC and DOCX files easy to read by converting them to PDF.", button: "Select Word files" },
  { path: "powerpoint-to-pdf", title: "PowerPoint to PDF", desc: "Make PPT and PPTX slideshows easy to view by converting them to PDF.", button: "Select PowerPoint files" },
  { path: "excel-to-pdf", title: "Excel to PDF", desc: "Make EXCEL spreadsheets easy to read by converting them to PDF.", button: "Select Excel files" },
  { path: "edit-pdf", title: "Edit PDF", desc: "Add text, images, shapes or freehand annotations to a PDF document.", button: "Select PDF files" },
  { path: "pdf-to-jpg", title: "PDF to JPG", desc: "Convert each PDF page into a JPG or extract all images contained in a PDF.", button: "Select PDF files" },
  { path: "jpg-to-pdf", title: "JPG to PDF", desc: "Convert JPG images to PDF in seconds. Easily adjust orientation and margins.", button: "Select JPG files" },
  { path: "sign-pdf", title: "Sign PDF", desc: "Sign yourself or request electronic signatures from others.", button: "Select PDF files" },
  { path: "watermark", title: "Watermark PDF", desc: "Stamp an image or text over your PDF in seconds.", button: "Select PDF files" },
  { path: "rotate-pdf", title: "Rotate PDF", desc: "Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!", button: "Select PDF files" },
];

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

  const openSignIn = () => {
    setAuthMode("signin");
    setAuthOpen(true);
  };
  const openSignUp = () => {
    setAuthMode("signup");
    setAuthOpen(true);
  };
  const closeAuth = () => setAuthOpen(false);
  const switchMode = () => setAuthMode(m => (m === "signin" ? "signup" : "signin"));

  return (
    <div className="min-h-screen bg-[url('/background.svg')] bg-fixed bg-cover bg-center flex flex-col font-sans">
      <ScrollToTop />
      <Header onSignIn={openSignIn} onSignUp={openSignUp} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ToolsGrid />
            <SolutionsSection />
            <TrustedBySection />
            <PremiumSection />
          </>
        } />
        <Route path="/all-tools" element={<ToolsGrid />} />
        {toolRoutes.map(tool => (
          <Route key={tool.path} path={`/${tool.path}`} element={<ToolPage {...tool} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <AuthModal open={authOpen} onClose={closeAuth} mode={authMode} onSwitchMode={switchMode} />
    </div>
  );
}

export default App;
