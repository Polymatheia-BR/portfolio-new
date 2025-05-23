import { Text, Group, Stack } from "@mantine/core";
import './MainBody.css'
import DevIco from '/src/assets/dev_avatar.svg?react'

export default function MainBody() {
    return (     
        <>        
            <Group justify="space-between" mb={200}>
                <Stack className="textContainer">
                    <Text fw={700} size={70} lh="1" className="titleText">FULLSTACK <span style={{color:'var(--mantine-color-blue-7)'}}><br/>DEVELOPER</span></Text>
                    <Text w={500}><Text span fw={600} c="blue.7">Olá! Seja bem vindo...</Text><br/> Eu me chamo Victor Ferreira e sou um desenvolvedor e analista de sistemas apaixonado por computação!</Text>
                </Stack>    
                <DevIco style={{ width: 600}} />
            </Group>                
        </>
    )
}