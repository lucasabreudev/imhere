import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['Lucas', 'Vini', 'Maria', 'John', 'Iza', 'Saori', 'Francisco', 'Julia', 'Antonio']

  function handleParticipantAdd(name: string) {
    if (participants.includes(name)) {
      return Alert.alert("Participante já existe na lista","Por favor, adicione um participante com outro nome")
    }
  }

  function handleParticipantRemove(name: string) {
     Alert.alert("Remover participante",`Remover o participante ${name}`,
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
        />

        <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd('Lucas')}>
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
