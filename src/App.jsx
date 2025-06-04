import { Container, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';


import Header from './pages/Header';
import MainBody from './pages/MainBody';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contato from './pages/Contato';

import './App.css'


function App() {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <Notifications />
        <Header />
        <Container size="xl" mt={300}>
          <MainBody />
          <AboutMe />
          <Projects />
          <Skills />
        </Container>
        <Contato />
    </MantineProvider>
  )
}

export default App
