import React, { useEffect } from 'react';
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import useWindowStore from '#store/window';

const ImageFile = (props) => {
  // Get the window data from the store
  const windowData = useWindowStore((state) => state.windows.imgfile?.data) || props.data || {};

  // Debug logging
  useEffect(() => {
    console.log('ImageFile mounted with props:', props);
    console.log('ImageFile windowData:', windowData);
  }, [props, windowData]);

  if (!windowData || !windowData.imageUrl) {
    console.log('No image data available, returning null');
    return (
      <div className="flex flex-col h-full bg-white">
        <div className="flex items-center justify-center h-full">
          <p>No image to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <div id="window-header" className="flex-shrink-0 flex items-center border-b border-gray-200 bg-gray-50 h-8">
        <WindowControls target="imgfile" />
        <h2 className="text-sm font-medium truncate px-2">
          {windowData.name || 'Untitled Image'}
        </h2>
      </div>

      <div className="flex-1 p-4 overflow-auto flex items-center justify-center bg-gray-50">
        <div className="max-w-full max-h-full flex items-center justify-center">
          <img 
            src={windowData.imageUrl} 
            alt={windowData.name || 'Image'} 
            className="max-w-full max-h-full object-contain"
            onLoad={() => console.log('Image loaded successfully')}
            onError={(e) => console.error('Error loading image:', e)}
          />
        </div>
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
