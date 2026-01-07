import { WindowControls } from '#components'
import React from 'react'
import { Search } from 'lucide-react'
import WindowWrapper from '#hoc/WindowWrapper'
import { locations} from "#constants/index.js"
import useLocationStore from '#store/location'
import clsx from 'clsx'
import useWindowStore from '#store/window'

const Finder = () => {
  const { openWindow } = useWindowStore()
  const {activeLocation, setActiveLocation} = useLocationStore()

  const openItem = (item) => {
    if(item.fileType === 'pdf') return openWindow('resume')
    if(item.kid === 'folder') return setActiveLocation(item);
    if(['fig', 'url'].includes(item.fileType) && item.href) 
        return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (name, items) => (
    <div className="pl-0">
        <h3 className="text-sm font-semibold text-gray-500 px-2 py-1">{name}</h3>
        <ul className="-mx-2">
           {items.map((item) => (
        <li 
            key={item.id} 
            onClick={() => setActiveLocation(item)} 
            className={clsx(item.id === activeLocation?.id ? 'active' : 'not-active')}
            >
                <img src={item.icon} className='w-4' alt={item.name} />
                <p className='text-sm font-medium truncate'>{item.name}</p>
        </li>
        ))}
        </ul>
    </div>
  );

  return (
    <>
    <div id="window-header">
        <WindowControls target="finder"/>
        <Search className="icon" />
    </div>

    <div className='bg-white flex h-full'>
        <div className='sidebar'>
            <div>
                {renderList('Favorites', Object.values(locations))}
            </div>
            <div>
                {renderList('My Projects', Object.values(locations.work.children || {}))}
            </div>
        </div>
        <ul className='content'>
            {activeLocation?.children.map((item) =>(
                <li key={item.id} className={item.position} onClick={() => openItem(item)}>
                    <img src={item.icon} alt={item.name} />
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
    </div>

    </>
  )
}

const FinderWindow = WindowWrapper(Finder, 'finder')

export default FinderWindow