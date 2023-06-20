import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd(name: string) {
    if (participants?.includes(name)) {
      return Alert.alert("Participante já existe na lista", "Por favor, adicione um participante com outro nome")
    }
    if (participantName.length === 0) {
      return Alert.alert("Preencha o campo corretamente", "O nome do participante não foi informado")
    }

    setParticipants(prevState => [...prevState, name])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Remover o participante ${name}`,
      [
        {
          text: 'Sim',
          onPress: () => Alert.alert('Excluído', `${name} foi removido da lista`)
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    )

  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sábado, 27 de Maio de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd(participantName)}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não existem participantes cadastrados
          </Text>
        )}
      />
    </View>
  );
}
