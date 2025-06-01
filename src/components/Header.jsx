import { Burger, Button, Container, Group, Image } from "@mantine/core"
import { notifications } from "@mantine/notifications"
import { useDisclosure } from "@mantine/hooks"

import "./Header.css"

const links = [
    { link: '#aboutMe', texto: 'Sobre Mim'},
    { link: '#projetos', texto: 'Projetos'},
    { link: '#habilidades', texto: 'Habilidades'},
    { link: '#contato', texto: 'Contato'}
]

function Header() {
    const [opened, {toggle}] = useDisclosure(false);

    return (    
        <header className="header">
            <Container size="xl" h={56} className="inner">
                <Group gap={6}>
                    <Image h={40} w="auto" src="/terminal.png" />
                    <h2>VictorDev</h2>
                </Group>

                <Group>
                    <Group gap={5} visibleFrom="md">
                        {links.map((link) => <a key={link.link} className="link" href={link.link}>{link.texto}</a>)}                        
                        <Button size="xs" onClick={() => window.open("/Victor Ferreira França.pdf")}>Currículo</Button>
                    </Group>                    
                    <div className="divider"></div>
                    <Image h={24} w="auto" src="language-svgrepo-com.svg" onClick={() => notifications.show({ title: "Funcionalidade em desenvolvimento", message: "No momento ainda estamos desenvolvendo essa funcionalidade"})} />
                    <div className="divider"></div>
                    <i className="devicon-linkedin-plain headerIcon" onClick={() => window.open("https://www.linkedin.com/in/victor-ferreira-franca/")} />
                    <i className="devicon-github-original headerIcon" onClick={() => window.open("https://github.com/Polymatheia-BR")} />                
                    <Image className="headerIcon" w={24} src="/whatsapp.svg?react" />
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
            </Container>
        </header>
    )
}

export default Header