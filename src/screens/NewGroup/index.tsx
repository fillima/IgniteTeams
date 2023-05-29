import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { groupCreate } from "@storage/group/groupCreate";

import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
    const navigation = useNavigation();

    const [group, setGroup] = useState('');

    async function handleNew() {
        try {
            await groupCreate(group);
            navigation.navigate('players', { group });
        } catch (error) {
            console.log(error);
        }
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
                    onChangeText={setGroup}
                />
                <Button
                    onPress={handleNew}
                    title="Criar"
                />
            </Content>
        </Container>
    );
}