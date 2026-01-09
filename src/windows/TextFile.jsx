import React from 'react';
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import useWindowStore from '#store/window';

const TextFile = () => {
  // Get the text file data from the window store
  const data = useWindowStore((state) => state.windows.txtfile?.data);

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2 className="text-sm font-medium truncate">{data.name || 'Untitled'}</h2>
      </div>

      <div className="p-6 overflow-auto h-full">
        {data.image && (
          <div className="mb-4 flex justify-center">
            <img 
              src={data.image} 
              alt={data.name || ''} 
              className="max-w-full h-auto max-h-48 object-contain"
            />
          </div>
        )}
        
        {data.subtitle && (
          <h3 className="text-lg font-medium mb-4 text-center">{data.subtitle}</h3>
        )}
        
        <div className="prose max-w-none">
          {data.description?.map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>

      <style jsx>{`
        #window-header {
          @apply flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50;
        }
        
        .prose {
          @apply text-gray-800 leading-relaxed;
        }
        
        .prose p:last-child {
          @apply mb-0;
        }
      `}</style>
    </>
  );
};

const TextFileWindow = WindowWrapper(TextFile, 'txtfile');

export default TextFileWindow;
