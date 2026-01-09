import React, { useState } from 'react';
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import useWindowStore from '#store/window';

const GALLERY_IMAGES = [
'anirudh.jpeg',
];

const SIDEBAR_ITEMS = [
  { id: 'photos', icon: '📷', label: 'Photos' },
  { id: 'library', icon: '📚', label: 'Library' },
  { id: 'memories', icon: '🕒', label: 'Memories' },
  { id: 'places', icon: '📍', label: 'Places' },
  { id: 'people', icon: '👥', label: 'People' },
  { id: 'favorites', icon: '⭐', label: 'Favorites' }
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const { openWindow } = useWindowStore();

  const handleImageClick = (imageName) => {
    console.log('handleImageClick called with:', imageName);
    const windowData = {
      name: imageName,
      imageUrl: `/images/${imageName}`,
      isOpen: true,
      zIndex: 1000
    };
    console.log('Calling openWindow with:', windowData);
    openWindow('imgfile', windowData);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Window Header */}
      <div id="window-header" className="flex items-center border-b border-gray-200 bg-gray-50 h-8">
        <WindowControls target="gallery" />
        <h2 className="text-sm font-medium truncate px-2">Photos</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 bg-gray-50 border-r border-gray-200 p-4">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`flex items-center w-full px-3 py-2 mb-1 rounded-md text-left ${
                activeTab === item.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="mr-2 text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="flex-1 overflow-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {GALLERY_IMAGES.map((image, index) => (
              <div 
                key={index} 
                className="group relative aspect-square bg-gray-100 rounded-md overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={`/images/${image}`}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white bg-opacity-80 p-2 rounded-full text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        #window-header {
          -webkit-app-region: drag;
        }
        #window-header * {
          -webkit-app-region: no-drag;
        }
      `}</style>
    </div>
  );
};

const GalleryWindow = WindowWrapper(Gallery, 'gallery');
export default GalleryWindow;
