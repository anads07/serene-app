import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const Cadastro = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/entrar.png')} style={styles.logo} />

      <View style={styles.loginBox}>
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tabButton, styles.inactiveTab]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.tabText}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.tabText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.welcomeText}>SEJA BEM-VINDO</Text>

        <View style={styles.inputContainer}>
          <Image source={require('./assets/user.png')} style={styles.inputIcon} />
          <TextInput 
            style={styles.inputField}
            placeholder="Nome de usuario"
            placeholderTextColor="#FFFFFF"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('./assets/email.png')} style={styles.inputIcon} />
          <TextInput 
            style={styles.inputField}
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('./assets/senha.png')} style={styles.inputIcon} />
          <TextInput 
            style={styles.inputField}
            placeholder="Senha"
            placeholderTextColor="#FFFFFF"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.socialIconButton}>
            <Image source={require('./assets/google.png')} style={styles.smallSocialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIconButton}>
            <Image source={require('./assets/apple.png')} style={styles.smallSocialIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#b8d1ff',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: -50,
    zIndex: 1,
  },
  loginBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    width: '85%',
    borderRadius: 20,
    padding: 25,
    paddingTop: 50,
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#5691de',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#5691de',
  },
  inactiveTab: {
    opacity: 0.6,
  },
  tabText: {
    color: '#5691de',
    fontWeight: 'bold',
  },
  welcomeText: {
    color: '#5691de',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#84a9da',
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  inputIcon: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 50,
  },
  inputField: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: 'white',
    fontSize: 14,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 15,
  },
  socialIconButton: {
    marginHorizontal: 15,
  },
  smallSocialIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  registerButton: {
    backgroundColor: '#5691de',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Cadastro;