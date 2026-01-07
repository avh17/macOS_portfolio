import React from 'react';
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import useWindowStore from '#store/window';

const ImageFile = () => {
  // Get the image file data from the window store
  const data = useWindowStore((state) => state.windows.imgfile?.data);

  if (!data) return null;

  return (
    <div className="flex flex-col h-full bg-white">
      <div id="window-header" className="flex-shrink-0">
        <WindowControls target="imgfile" />
        <h2 className="text-sm font-medium truncate px-2">
          {data.name || 'Untitled Image'}
        </h2>
      </div>

      <div className="flex-1 p-4 overflow-auto flex items-center justify-center bg-gray-50">
        {data.imageUrl ? (
          <div className="max-w-full max-h-full flex items-center justify-center">
            <img 
              src={data.imageUrl} 
              alt={data.name || 'Image'} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ) : (
          <div className="text-gray-400">No image to display</div>
        )}
      </div>

      <style jsx>{`
        #window-header {
          @apply flex items-center border-b border-gray-200 bg-gray-50 h-8;
        }
        
        #window-header h2 {
          @apply flex-1 text-center pr-8; /* Add right padding to account for window controls */
        }
      `}</style>
    </div>
  );
};

const ImageFileWindow = WindowWrapper(ImageFile, 'imgfile');

export default ImageFileWindow;
