import { Card, Group, Image, Text, Title } from "@mantine/core";
import { motion } from "motion/react";

export default function AboutMe() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true}}
        >
            <Title className="degrade" id="aboutMe">Sobre mim</Title>
            <Text maw="800px" mb={30} c="dimmed" >Sou um desenvolvedor e analista formado em analise e desenvolvimento de sistemas, sempre priorizo a colaboração com o cliente e uma comunicação aberta. Estou constantemente explorando novas tecnologias, buscando inovação e significado em cada linha de código.</Text>
            <Group>
                <Card withBorder w={370} mih={170}>
                    <Card.Section withBorder inheritPadding py={10} px={20}>
                        <Group gap={2}>
                            <Image w={20} src="/src/assets/document.svg?react" />
                            <Text fw={500}>Educação</Text>
                        </Group>
                    </Card.Section>
                    <Card.Section py={10} px={20}>   
                        <Text fw={500}>Tecnologo em Analise e desenvolvimento de sistemas</Text>
                        <Text size="sm" c="gray.6">Faculdade Estácio de Sá<br/>2021 - 2024</Text>
                        <Text></Text>
                    </Card.Section>
                </Card>

                <Card withBorder w={370} mih={170}>
                    <Card.Section withBorder inheritPadding py={10} px={20}>
                        <Group gap={2}>
                            <Image w={20} src="/src/assets/document.svg?react" />
                            <Text fw={500}>Experiencia Profissional</Text>
                        </Group>
                    </Card.Section>
                    <Card.Section py={10} px={20}>   
                        <Text fw={500}>Jovem aprendiz auxiliar administrativo</Text>
                        <Text size="sm" c="gray.6">Alfoge segurança patrimonial LTDA<br/>2024 - 2025</Text>            
                    </Card.Section>
                </Card>

            </Group>
        </motion.div>
    )
}