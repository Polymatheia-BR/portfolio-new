import { Button, Container, Textarea, TextInput, Title } from "@mantine/core";

export default function Contato() {
    return (
        <Container fluid bg="blue">
            <Title ta="center" mt={100} fz={54}>CONTATO</Title>
            <Container py={50}>
                <form action="https://formsubmit.co/victorferreira8613@gmail.com" method="POST" style={{width: 500}}>            
                    <TextInput label="Seu Nome" placeholder="Digite seu nome aqui" name="name" />
                    <TextInput label="Seu Email" placeholder="Digite seu email aqui" type="email" name="email" />
                    <Textarea label="Sua mensagem" name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..." />
                    <Button type="submit" color="green" mt={10}>Enviar</Button>
                </form>
            </Container>
        </Container>
    )
}