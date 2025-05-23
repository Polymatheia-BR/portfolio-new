import { Badge, Button, Card, Group, Image, Stack, Text } from "@mantine/core";

export default function ProjectCard({nomeProjeto, urlProjeto, urlImagem = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png", descProjeto, catProjeto = "Fullstack"}) {
    return (
        <Card shadow="md" padding="lg" radius="md" withBorder w="400" h="430">
            <Card.Section>
                <Image
                src={urlImagem}
                height={160}
                alt="Norway"
                />
            </Card.Section>

            <Stack gap={1} h="100%" justify="space-between">
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{nomeProjeto}</Text>
                    <Badge color="pink">{catProjeto}</Badge>
                </Group>

                <Text size="sm" c="dimmed">
                    {descProjeto}
                </Text>

                <Group grow>
                    <Button color="blue" mt="md" radius="md" component="a" href="http://www.google.com.br">
                        Acessar Projeto
                    </Button>
                    <Button color="cyan" mt="md" radius="md" component="a" href="http://www.google.com.br">
                        Ver código-fonte
                    </Button>
                </Group>
            </Stack>
        </Card>
    )
}