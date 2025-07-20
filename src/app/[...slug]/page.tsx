import NotFound from '../components/NotFound';

interface PageProps {
  params: {
    slug: string[];
  };
}

const validTools = [
  'merge-pdf',
  'split-pdf',
  'compress-pdf',
  'rotate-pdf',
  'add-watermark',
];

export default function CatchAllPage({ params }: PageProps) {
  const path = params.slug.join('/');
  if (validTools.includes(path)) {
    // This should be handled by the specific tool page, but if it falls through, show 404
    return <NotFound />;
  }
  // For any other invalid route, show 404
  return <NotFound />;
} 