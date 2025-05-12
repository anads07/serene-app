import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Sugestoes = () => {
  const navigation = useNavigation();

  const activities = [
    {
      title: 'Leia um livro',
      action: 'Clique e veja ideias de livro',
      image: require('./assets/reading.png'),
      onPress: () => Alert.alert('Leia um livro', 'Aqui você poderá ver ideias de livros!'),
    },
    {
      title: 'Medite',
      action: 'Clique e veja um vídeo de como fazer',
      image: require('./assets/meditation.png'),
      onPress: () => Alert.alert('Meditação', 'Aqui você verá um vídeo de meditação!'),
    },
    {
      title: 'Atividade física',
      action: 'Clique e veja exemplos de como fazer',
      image: require('./assets/exercise.png'),
      onPress: () => Alert.alert('Atividade Física', 'Exemplos de exercícios virão aqui!'),
    },
    {
      title: 'Respire e inspire',
      action: 'Clique e aprenda a técnica de respiração',
      image: require('./assets/breathing.png'),
      onPress: () => Alert.alert('Respiração', 'Técnicas de respiração serão mostradas aqui!'),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <MaterialIcons name="arrow-back" size={24} color="#0c4793" />
        </TouchableOpacity>
        <Text style={styles.headerText}>CUIDANDO DE VOCÊ</Text>
        <Image source={require('./assets/meditation.png')} style={styles.headerIcon} />
      </View>

      <View style={[styles.balloonWrapper, { alignSelf: 'flex-start' }]}>
        <View style={[styles.balloon, { alignSelf: 'flex-start' }]}>
          <Text style={styles.balloonText}>Notamos que seus registros indicam sinais de estresse.</Text>
        </View>
      </View>

      <View style={[styles.balloonWrapper, { alignSelf: 'flex-end' }]}>
        <View style={[styles.balloon, { alignSelf: 'flex-end' }]}>
          <Text style={styles.balloonText}>Que tal tirar um momento para relaxar?</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.okButton}>
        <Text style={styles.okButtonText}>Ok!</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Separamos algumas atividades para te ajudar!</Text>

      <View style={styles.gridContainer}>
        {activities.map((activity, index) => (
          <TouchableOpacity
            key={index}
            style={styles.activityCard}
            onPress={activity.onPress}
          >
            <Image source={activity.image} style={styles.activityImage} />
            <Text style={styles.activityTitle}>{activity.title}</Text>
            <Text style={styles.activityAction}>{activity.action}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 10,
    fontFamily: 'JosefinSans-Regular',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a2caff',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0c4793',
    fontFamily: 'JosefinSans-Bold',
  },
  headerIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  balloonWrapper: {
    marginTop: 12,
    marginHorizontal: 20,
  },
  balloon: {
    backgroundColor: '#0c4793',
    borderRadius: 20,
    padding: 12,
    maxWidth: width * 0.85,
  },
  balloonText: {
    color: '#fff',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    textAlign: 'center',
  },
  okButton: {
    marginTop: 14,
    backgroundColor: '#cde6ff',
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  okButtonText: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 16,
    color: '#0c4793',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#0c4793',
    fontWeight: '700',
    fontFamily: 'JosefinSans-SemiBold',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  activityCard: {
    width: width * 0.42,
    backgroundColor: '#84a9da',
    borderRadius: 20,
    padding: 10,
    margin: 8,
    alignItems: 'center',
  },
  activityImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'JosefinSans-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  activityAction: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'JosefinSans-Regular',
    marginTop: 4,
  },
});

export default Sugestoes;
