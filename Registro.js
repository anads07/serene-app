import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
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

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Imagem Central */}
          <Image
            source={require('./assets/diario.png')}
            style={styles.centralImage}
          />

          {/* Botões Principais */}
          <View style={styles.buttonsContainer}>
            {[
              { icon: require('./assets/diariodia.png'), text: 'Diário do dia', color: '#afcdf2' },
              { icon: require('./assets/registre.png'), text: 'Registre suas emoções', color: '#96bef0' },
              { icon: require('./assets/relatorio.png'), text: 'Relatório semanal', color: '#7bb0ea' },
              { icon: require('./assets/calendario.png'), text: 'Calendário com emoções', color: '#64a1e6' }
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.mainButton,
                  { backgroundColor: item.color },
                  index === 0 && styles.topButton,
                  index === 3 && styles.bottomButton
                ]}
                activeOpacity={0.8}
              >
                <Image source={item.icon} style={styles.whiteButtonIcon} />
                <Text style={styles.whiteButtonText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Menu Inferior Fixo */}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#D6EBFF',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#D6EBFF',
  },
  headerTitle: {
    fontFamily: 'Josefin Sans',
    fontSize: 32,
    textAlign: 'center',
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
  },
  avatarIcon: {
    width: 35,
    height: 35,
    borderRadius: 1,
  },
  centralImage: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonsContainer: {
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05,
  },
  mainButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingVertical: windowHeight * 0.025,
    paddingHorizontal: windowWidth * 0.05,
    marginBottom: 1,
    borderRadius: 25,
  },
  topButton: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  bottomButton: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: windowHeight * 0.02,
  },
  whiteButtonIcon: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    resizeMode: 'contain',
    tintColor: 'white',
    marginRight: 15,
  },
  whiteButtonText: {
    fontSize: windowWidth * 0.045,
    color: 'white',
    fontFamily: 'Josefin Sans-Regular',
    flexShrink: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
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
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  footerText: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: 16,
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default App;