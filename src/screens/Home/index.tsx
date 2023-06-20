import { Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['Lucas', 'Vini', 'Maria', 'John', 'Iza', 'Saori', 'Francisco', 'Julia', 'Antonio']

  function handleParticipantAdd() {
    console.log('Clicou')
  }

  function handleParticipantRemove() {
    console.log('Removido')
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

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
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
            onRemove={handleParticipantRemove}
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
