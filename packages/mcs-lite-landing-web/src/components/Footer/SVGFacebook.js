/**
 * svgtoreact
 *
 * @author Michael Hsu
 */

import React from 'react';

export default function SVGFacebook(props) {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        d="M0 4.004c0-2.211 1.789-4.004 4.004-4.004h23.991c2.211 0 4.004 1.789 4.004 4.004v23.991c0 2.211-1.789 4.004-4.004 4.004h-23.991c-2.211 0-4.004-1.789-4.004-4.004v-23.991zm22.079 27.996v-12.564h4.16l.623-4.897h-4.782v-3.126c0-1.418.388-2.384 2.393-2.384l2.557-.001v-4.379c-.443-.06-1.96-.193-3.727-.193-3.687 0-6.212 2.282-6.212 6.473v3.611h-4.17v4.897h4.17v12.564h4.987z"
        fill="#fff"
      />
    </svg>
  );
}
