import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
    const navigation = useNavigation();

    function handleNewPlayers() {
        navigation.navigate('players', {group: 'Filipe'});
    }
    
    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon />
                <Highlight
                    title="Nova Turma"
                    subtitle="Crie uma turma para adicionar pessoas"
                />
                <Input
                    placeholder="Nome da turma"
                />
                <Button
                    onPress={handleNewPlayers}
                    title="Criar"
                />
            </Content>
        </Container>
    );
}