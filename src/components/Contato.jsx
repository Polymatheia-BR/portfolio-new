import { Button, Container, Flex, Group, Image, Stack, Text, Textarea, TextInput, Title } from "@mantine/core";
import { motion } from "motion/react";
import './Contato.css'

export default function Contato() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true}}
        >
        <Container fluid className="degrade-bg">
            <Title id="contato" ta="center" mt={100} fz={54}>CONTATO</Title>
            <Container py={50}>            
                <Group justify="space-between">
                    <form action="https://formsubmit.co/victorferreira8613@gmail.com" method="POST" style={{width: 500}}>            
                        <TextInput label="Seu Nome" placeholder="Digite seu nome aqui" name="name" />
                        <TextInput label="Seu Email" placeholder="Digite seu email aqui" type="email" name="email" />
                        <Textarea label="Sua mensagem" name="message" resize="vertical" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..." />
                        <Button type="submit" color="green" mt={10}>Enviar</Button>
                    </form>
                    <div id="divider"></div>
                    <Stack>
                        <Flex gap={3} align="center">
                            <Image opacity={0.5} h={22} w={22} src="/src/assets/email.svg?react" />
                            <Text size="xl" fs="italic" td="underline" fw={700}>victorferreira8613@gmail.com</Text>
                        </Flex>
                        <Flex gap={3} align="center">
                            <Image opacity={0.7} src="/src/assets/whatsapp.svg?react" h={22} w={22} />
                            <Text size="xl" fs="italic" fw={700} onClick={() => window.open("https://wa.me/5581984613388")} style={{cursor: "pointer"}}>(81) 9.8461-3388</Text>
                        </Flex>
                    </Stack>
                </Group>
            </Container>
        </Container>
        </motion.div>
    )
}