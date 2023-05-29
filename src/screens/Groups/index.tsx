import React, { useCallback, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Container } from './styles';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard
            title={item}          
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?'/>}
      />
      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </Container>
  );
}
