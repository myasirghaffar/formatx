import React from "react";

const NotFoundSVG = (props) => (
  <svg width={props.width || 320} height={props.height || 220} viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="160" cy="200" rx="120" ry="15" fill="#F3F4F6" />
    <rect x="60" y="60" width="200" height="100" rx="20" fill="#E5E7EB" />
    <rect x="80" y="80" width="160" height="60" rx="10" fill="#fff" />
    <text x="160" y="120" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#9CA3AF" dy=".3em">404</text>
    <text x="160" y="155" textAnchor="middle" fontSize="18" fill="#6B7280"></text>
    <circle cx="110" cy="110" r="6" fill="#F87171" />
    <circle cx="210" cy="110" r="6" fill="#FBBF24" />
    <rect x="140" y="140" width="40" height="8" rx="4" fill="#D1D5DB" />
  </svg>
);

export default NotFoundSVG; 