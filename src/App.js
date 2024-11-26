import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import Image from './components/Image.js';
import List from './components/List.js';
import Instagram from './components/Instagram.js';
import Github from './components/Github.js';
import Linkedin from './components/Linkedin.js';
import Paragraph from './components/Paragraph.js';

function App() {
  const items = ['at the gym doing everything but cardio', 'at the closest boba shop', 'on my phone inputting my latest Beli additions'];   
  const words = "Hello!!! I am a sophomore at the University of Pennsylvania studying Computer Science, Cognitive Science, and Consumer Psychology. When I'm not in class or studying, you can probably catch me:"
  const endWords = "I'm someone who is passionate about many different fields from neuroscience to DJ-ing to computer science to ceramics to dragonboat and am not afraid to explore more hobbies or interests!"
  return (
    <div className="App">
        <div id= "heading">
            <Header title="Brianna Kwan" subtitle="Curiosity Enthusiast" />
        </div>
        <div class = "container">
            <div class= "first">
                <Image />
            </div>
            <div class = "second">
                <Paragraph text = {words} />
                <List items = {items} />
                <Paragraph text = {endWords} />
            </div>
        </div>
        <div class = "icons">
            <a href= "https://github.com/brikzz">
                <Github />
            </a>
            <a href= "https://www.linkedin.com/in/brianna-kwan-929413228">
                <Linkedin />
            </a>
            <a href = "https://www.instagram.com/brikreates/">
                <Instagram />
            </a>
        </div>
    </div>
  );
}

export default App;
