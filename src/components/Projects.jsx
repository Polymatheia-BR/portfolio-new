import { Group, Title } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

export default function Projects() {

    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"
    return(
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true}}
        >
            <Title id="projetos" mt={200} mb={20} className="degrade">Projetos</Title>
            <Group>
                <ProjectCard nomeProjeto="Projeto 1" descProjeto={lorem} />
                <ProjectCard nomeProjeto="Projeto 2" descProjeto={lorem} />
                <ProjectCard nomeProjeto="Projeto 3" descProjeto={lorem} />
                <ProjectCard nomeProjeto="Projeto 4" descProjeto={lorem} />
                <ProjectCard nomeProjeto="Projeto 5" descProjeto={lorem} />
                <ProjectCard nomeProjeto="Projeto 6" descProjeto={lorem} />
            </Group>
        </motion.div>
    )
}