import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/entrar.png')} style={styles.logo} />

      <View style={styles.loginBox}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.tabText}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabButton, styles.inactiveTab]}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.tabText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('./assets/user.png')} style={styles.inputIcon} />
          <TextInput 
            style={styles.inputField}
            placeholder="Nome de usuário | Email"
            placeholderTextColor="#FFFFFF"
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

        <View style={styles.rememberContainer}>
          <TouchableOpacity style={styles.checkbox} />
          <Text style={styles.rememberText}>Lembrar-me</Text>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/google.png')} style={styles.socialIcon} />
          <Text style={styles.socialText}>Fazer o login com o Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/apple.png')} style={styles.socialIcon} />
          <Text style={styles.socialText}>Fazer o login com o Apple</Text>
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
    marginBottom: 20,
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
    fontSize: 16,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#5691de',
    borderRadius: 3,
    marginRight: 10,
  },
  rememberText: {
    color: '#5691de',
  },
  loginButton: {
    backgroundColor: '#5691de',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#5691de',
    marginBottom: 10,
    fontSize: 16,
  },
  socialContainer: {
    width: '85%',
  },
  socialButton: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#84a9da',
    borderRadius: 50,
    marginBottom: 10,
  },
  socialIcon: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 40,
  },
  socialText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Login;