import { Header } from "@components/Header";
import { Container } from "./styles";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";

export function Players() {
    return(
        <Container>
            <Header showBackButton/>
            <Highlight
                title="Nome da turma"
                subtitle="Adicione a galera e separe os times"
            />
            <Button
                title="Remover turma"
                type="SECONDARY"
            />
        </Container>
    );
}