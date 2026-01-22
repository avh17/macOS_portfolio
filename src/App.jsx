import React from 'react';
import { Navbar, Welcome, Dock, Home } from './components';
import Resume from './windows/Resume';
import gsap from 'gsap';
import { Terminal, Safari, TextFile, ImageFile, Contact, Gallery } from "#windows";
import { Draggable } from 'gsap/Draggable';
import FinderWindow from '#windows/Finder';
import useWindowStore from '#store/window';

gsap.registerPlugin(Draggable);

const App = () => {
  const { windows } = useWindowStore();
  
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <FinderWindow />
      {/* <Resume /> */}
      <TextFile />
      {windows.imgfile?.isOpen && <ImageFile />}
      <Contact />
      {/* <Gallery /> */}
      <Home />
    </main>
  );
};

export default App;