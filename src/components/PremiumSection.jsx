import { DocumentStackSVG } from "../assets/svg/SVGs.jsx";

const PremiumSection = () => (
  <section className="bg-gray-900 text-white py-20">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="mb-8 md:mb-0 md:w-2/3">
        <h2 className="text-3xl font-bold mb-4">Get more with Premium</h2>
        <p className="mb-8 text-gray-200 text-lg">Complete projects faster with batch file processing, convert scanned documents with OCR and e-sign your business agreements.</p>
        <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded font-semibold hover:bg-yellow-300 text-base">Get Premium</button>
      </div>
      <div className="md:w-1/3 flex justify-center">
        {/* Placeholder for illustration */}
        <div className="w-92 h-auto rounded-lg flex items-center justify-center">
          <DocumentStackSVG />
        </div>
      </div>
    </div>
  </section>
);

export default PremiumSection; 