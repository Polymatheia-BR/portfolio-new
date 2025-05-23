import { Container, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';

import Header from './components/Header'
import MainBody from './components/MainBody';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';

import './App.css'


function App() {
  return (
    <MantineProvider defaultColorScheme='dark'>
        <Header />
        <Container size="xl">
          <MainBody />
          <AboutMe />
          <Projects />
          <Skills />
        </Container>
    </MantineProvider>
  )
}

export default App
