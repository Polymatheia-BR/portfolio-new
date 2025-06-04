import { Text, Group, Stack, Image } from "@mantine/core";
import './MainBody.css'
import { motion } from "motion/react";

export default function MainBody() {
    return (        
        <motion.div 
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <Group justify="space-between" mb={200}>
                <Stack className="textContainer">
                    <Text fw={700} size={70} lh="1" className="titleText">FULLSTACK <span style={{color:'var(--mantine-color-blue-7)'}}><br/>DEVELOPER</span></Text>
                    <Text w={500}><Text span fw={600} c="blue.7">Olá! Seja bem vindo...</Text><br/> Eu me chamo Victor Ferreira e sou um desenvolvedor e analista de sistemas apaixonado por computação!</Text>
                </Stack>    
                <Image src="/dev_avatar.svg?react" w={600} />                
            </Group>
        </motion.div>   
    )
}