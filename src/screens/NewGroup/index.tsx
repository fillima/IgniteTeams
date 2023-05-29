import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { groupCreate } from "@storage/group/groupCreate";

import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
    const navigation = useNavigation();

    const [group, setGroup] = useState('');

    async function handleNew() {
        try {
            if (group.trim().length === 0) {
                return Alert.alert('Nova Turma', 'Informe o nome da turma')
            }

            await groupCreate(group);
            navigation.navigate('players', { group });
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova Turma', error.message);
            } else {
                Alert.alert('Nova Turma', 'Não foi possível adicionar um novo time');
                console.log(error);
            }
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