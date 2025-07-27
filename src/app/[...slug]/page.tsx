import NotFound from '../components/NotFound';

interface PageProps {
  params: {
    slug: string[];
  };
}

// List of valid tools
const validTools = [
  'merge-pdf',
  'split-pdf',
  'compress-pdf',
  'rotate-pdf',
  'add-watermark',
];

export default function CatchAllPage({ params }: PageProps) {
  const path = params.slug.join('/');

  // If tool is not valid, show NotFound
  if (!validTools.includes(path)) {
    return <NotFound />;
  }

  // Render your actual tool component/page here
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Tool: {path}</h1>
      {/* Add actual component for the tool here */}
    </div>
  );
}
