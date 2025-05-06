import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class Inicio extends Component {
  handleArrowPress = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gradientOverlay} />
        
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.fullLogo}
          />
        </View>

        <View style={styles.mainContent}>
          <Image
            source={require('./assets/7.png')}
            style={styles.illustration}
          />
          <Text style={styles.mainText}>
            Transforme sua mente, cuide{'\n'}
            de sua alma: juntos, podemos{'\n'}
            construir um caminho para o{'\n'}
            bem-estar mental.
          </Text>
        </View>

        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={this.handleArrowPress}>
            <Image
              source={require('./assets/8.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fefeff',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#a4c4ff',
    opacity: 0.5,
  },
  logoContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  fullLogo: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
  },
  mainContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  illustration: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  mainText: {
    textAlign: 'left',
    fontSize: 20,
    color: '#0c4793',
    lineHeight: 24,
    maxWidth: 280,
    fontWeight: 'bold',
  },
  arrowContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  arrowIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default Inicio;