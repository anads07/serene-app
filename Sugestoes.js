import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Sugestoes = () => {
  const navigation = useNavigation();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.8));

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

  const handleOkPress = () => {
    setShowSuggestions(true);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      })
    ]).start();
  };

  return (
    <View style={styles.container}>
      {/* Header fixo no topo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <MaterialIcons name="arrow-back" size={24} color="#0c4793" />
        </TouchableOpacity>
        <Text style={styles.headerText}>CUIDANDO DE VOCÊ</Text>
        <Image source={require('./assets/meditation.png')} style={styles.headerIcon} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Balões de mensagem */}
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

        <TouchableOpacity 
          style={styles.okButton}
          onPress={handleOkPress}
        >
          <Text style={styles.okButtonText}>Ok!</Text>
        </TouchableOpacity>

        {/* Sugestões (aparecem apenas após clicar em Ok) */}
        {showSuggestions && (
          <Animated.View 
            style={[
              styles.suggestionsContainer,
              { 
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }]
              }
            ]}
          >
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
          </Animated.View>
        )}
      </ScrollView>

      {/* Footer fixo */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Menu')}>
          <Image source={require('./assets/menu.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>MENU</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Registro')}>
          <Image source={require('./assets/registro.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>REGISTRO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Sugestoes')}>
          <Image source={require('./assets/sugestões.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>SUGESTÕES</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Chat')}>
          <Image source={require('./assets/chat.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>CHAT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a2caff',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    position: 'absolute',

  },
  scrollContent: {
    paddingTop: 70, // Espaço para o header
    paddingBottom: 80, // Espaço para o footer
    alignItems: 'center',
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
    marginTop: -15,
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
footer: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 60,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#a2caff',
  borderTopWidth: 1,
  borderTopColor: '#1C86EE',
  paddingVertical: 15,
},
footerItem: {
  alignItems: 'center',
},
footerIcon: {
  width: 38,
  height: 38,
  marginBottom: -5,
},
footerText: {
  fontFamily: 'BebasNeue-Regular',
  fontSize: 16,
  color: 'white',
  textTransform: 'uppercase',
},
suggestionsContainer: {
  width: '100%',
  alignItems: 'center',
  marginTop: 20,
},
});

export default Sugestoes;
