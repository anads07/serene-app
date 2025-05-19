import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#D6EBFF', '#a2caff']}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Cabeçalho */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Diário emocional</Text>
            <TouchableOpacity>
              <Image
                source={require('./assets/perfil.png')}
                style={styles.avatarIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Imagem Central */}
          <Image
            source={require('./assets/diario.png')}
            style={styles.centralImage}
          />

          {/* Botões Principais - Agora como balões grudados */}
          <View style={styles.balloonContainer}>
            {[
              { icon: require('./assets/diariododia.png'), text: 'Diário do dia', color: '#afcdf2' },
              { icon: require('./assets/registre.png'), text: 'Registre suas emoções', color: '#96bef0' },
              { icon: require('./assets/relatorio.png'), text: 'Relatório semanal', color: '#7bb0ea' },
              { icon: require('./assets/calendario.png'), text: 'Calendário com emoções', color: '#64a1e6' }
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.balloonButton,
                  { backgroundColor: item.color },
                  index === 3 && styles.lastBalloon
                ]}
                activeOpacity={0.8}
              >
                <Image source={item.icon} style={styles.balloonIcon} />
                <Text style={styles.balloonText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'relative'
  },
  gradient: {
    flex: 1,
    paddingBottom: 1 
  },
  safeArea: {
    flex: 1,
    justifyContent: 'flex-start' // Alinha conteúdo no topo
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0c4793',
    flex: 1,
    textAlign: 'center'
  },
  avatarIcon: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  centralImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
  balloonContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 25,
    overflow: 'hidden',
  },
  balloonButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',
  },
  lastBalloon: {
    borderBottomWidth: 0,
  },
  balloonIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  balloonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Josefin Sans-Regular',
    fontWeight: 'bold',
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
    borderTopColor: '#1C86EE'
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  footerIcon: {
    width: 38,
    height: 38,
    marginBottom: 2
  },
  footerText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold'
  }
});

export default App;