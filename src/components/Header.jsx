import { Burger, Container, Group, Image } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import classes from "./Header.module.css"
import Linkedin from "/src/assets/linkedin-plain.svg?react";
import Github from "/src/assets/github-original.svg?react";
import Whatsapp from "/src/assets/whatsapp.svg?react";

const links = [
    { link: '/sobre', texto: 'Sobre Mim'},
    { link: '/projetos', texto: 'Projetos'},
    { link: '/experiencia', texto: 'Experiencia'},
    { link: '/habilidades', texto: 'Habilidades'}
]

function Header() {
    const [opened, {toggle}] = useDisclosure(false);

    return (
        <header className={classes.header}>
            <Container size="xl" className={classes.inner}>
                <Group gap={6}>
                    <Image h={40} w="auto" src="/src/assets/terminal.png" />
                    <h2>VictorDev</h2>
                </Group>

                <Group>
                    <Group gap={5} visibleFrom="md">
                        {links.map((link) => <a key={link.link} className={classes.link} href={link.link}>{link.texto}</a>)}
                        <a href="/Victor Ferreira França.pdf" target="_blank" className={`${classes.link} ${classes.cv}`}>Currículo</a>
                    </Group>                    
                    <div className={classes.divider}></div>
                    <Image h={30} w="auto" src="/src/assets/language-icon.png" />
                    <div className={classes.divider}></div>
                    <a className={classes.headerIcon} target="_blank" href="https://www.linkedin.com/in/victor-ferreira-franca"><Linkedin className={classes.headerIcon} /></a>
                    <a className={classes.headerIcon} target="_blank" href="https://github.com/Polymatheia-BR"><Github className={classes.headerIcon} /></a>
                    <a className={classes.headerIcon} target="_blank" href="https://wa.me/5581984613388"><Whatsapp className={classes.headerIcon} /></a>
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
            </Container>
        </header>
    )
}

export default Header