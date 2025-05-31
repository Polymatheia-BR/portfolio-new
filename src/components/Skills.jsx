import { Flex, Group, SimpleGrid, Text, Title } from "@mantine/core";
import './Skills.css'
import { motion } from "motion/react";

export default function Skills() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true}}
        >
            <Title id="habilidades" mt={200} className="degrade" >HABILIDADES</Title>

            <Flex my={20} mb={130} justify="space-between" className="iconBlock">
                <Title c="var(--mantine-color-blue-7)">FRONTEND</Title>
                <SimpleGrid cols={3}>
                    <Group gap="xs">
                        <i className="devicon-react-original"></i>
                        <Text>React</Text>
                    </Group>
                    <Group gap="xs">
                        <i className="devicon-tailwindcss-original"></i>
                        <Text>TailwindCSS</Text>
                    </Group>
                    <Group gap="xs">
                        <i className="devicon-javascript-plain"></i>
                        <Text>Javascript</Text>
                    </Group>
                    <Group gap="xs">
                        <i className="devicon-bootstrap-plain"></i>
                        <Text>Bootstrap</Text>
                    </Group>
                    <Group>
                        <i className="devicon-nextjs-plain"></i>
                        <Text>Next.js</Text>
                    </Group>
                </SimpleGrid>
            </Flex>

            <Flex my={130} justify="space-between" className="iconBlock">
                <Title c="var(--mantine-color-blue-7)">BACKEND</Title>
                <SimpleGrid cols={3}>
                    <Group>
                        <i className="devicon-java-plain"></i>
                        <Text>Java</Text>
                    </Group>
                    <Group>
                        <i className="devicon-express-original"></i>
                        <Text>Express.JS</Text>
                    </Group>
                    <Group>                        
                        <i className="devicon-spring-original"></i>
                        <Text>Spring Framework</Text>
                    </Group>
                    <Group>
                        <i className="devicon-postgresql-plain"></i>          
                        <Text>PostgreSQL</Text>
                    </Group>
                    <Group>
                        <i className="devicon-mysql-original"></i>          
                        <Text>MySQL</Text>
                    </Group>
                    <Group>                        
                        <i className="devicon-python-plain"></i>          
                        <Text>Python</Text>
                    </Group>
                </SimpleGrid>
            </Flex>     

            <Flex my={130} justify="space-between" className="iconBlock">
                <Title c="var(--mantine-color-blue-7)">FERRAMENTAS</Title>
                <SimpleGrid cols={3}>
                    <Group>                        
                        <i className="devicon-linux-plain"></i>          
                        <Text>Linux</Text>
                    </Group>
                    <Group>
                        <i className="devicon-git-plain"></i>          
                        <Text>Git & Github</Text>
                    </Group>
                    <Group>
                        <i className="devicon-postman-plain"></i>          
                        <Text>Postman</Text>
                    </Group>
                    <Group>                        
                        <i className="devicon-wordpress-plain"></i>          
                        <Text>Wordpress</Text>
                    </Group>                
                </SimpleGrid>
            </Flex>
        </motion.div>
    )
}