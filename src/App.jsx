import { Container, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';


import Header from './components/Header'
import MainBody from './components/MainBody';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contato from './components/Contato';

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
