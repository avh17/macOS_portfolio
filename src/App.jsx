import React from 'react'
import { Navbar, Welcome, Dock } from './components'
import Resume from './windows/Resume';
import gsap from 'gsap';

import { Terminal, Safari, TextFile, ImageFile, Contact } from "#windows"
import { Draggable } from 'gsap/Draggable'
import FinderWindow from '#windows/Finder';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
        <Safari/>
        <FinderWindow />
        <Resume />
        <TextFile />
        <ImageFile />
        <Contact />
    </main>
  )
}

export default App