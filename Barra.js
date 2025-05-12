import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';

class MENU extends Component {
  render() {
    return (
      <SafeAreaView style={styles.CONTAINER}>
        {/* CONTEÚDO PRINCIPAL */}
        <View style={styles.CONTENT}>
          <Text style={styles.CONTENTTEXT}>CONTEÚDO PRINCIPAL</Text>
        </View>

        {/* FOOTER/MENU */}
        <View style={styles.FOOTER}>
          <TouchableOpacity 
            style={styles.FOOTERITEM}
            onPress={() => this.props.navigation.navigate('MENU')}>
            <Image source={require('./ASSETS/12.PNG')} style={styles.FOOTERICON} />
            <Text style={styles.FOOTERTEXT}>MENU</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.FOOTERITEM}
            onPress={() => this.props.navigation.navigate('REGISTRO')}>
            <Image source={require('./ASSETS/9.PNG')} style={styles.FOOTERICON} />
            <Text style={styles.FOOTERTEXT}>REGISTRO</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.FOOTERITEM}
            onPress={() => this.props.navigation.navigate('SUGESTOES')}>
            <Image source={require('./ASSETS/10.PNG')} style={styles.FOOTERICON} />
            <Text style={styles.FOOTERTEXT}>SUGESTÕES</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.FOOTERITEM}
            onPress={() => this.props.navigation.navigate('CHAT')}>
            <Image source={require('./ASSETS/11.PNG')} style={styles.FOOTERICON} />
            <Text style={styles.FOOTERTEXT}>CHAT</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const STYLES = StyleSheet.create({
  CONTAINER: {
    FLEX: 1,
    BACKGROUNDCOLOR: '#F5F5F5',
  },
  CONTENT: {
    FLEX: 1,
    JUSTIFYCONTENT: 'CENTER',
    ALIGNITEMS: 'CENTER',
  },
  CONTENTTEXT: {
    FONTSIZE: 18,
    COLOR: '#333',
  },
  FOOTER: {
    FLEXDIRECTION: 'ROW',
    JUSTIFYCONTENT: 'SPACE-AROUND',
    ALIGNITEMS: 'CENTER',
    BACKGROUNDCOLOR: '#1E90FF',
    BORDERTOPWIDTH: 1,
    BORDERTOPCOLOR: '#1C86EE',
    PADDINGVERTICAL: 15,
    PADDINGBOTTOM: 25,
    HEIGHT: 80,
  },
  FOOTERITEM: {
    ALIGNITEMS: 'CENTER',
    JUSTIFYCONTENT: 'CENTER',
    PADDINGHORIZONTAL: 10,
  },
  FOOTERICON: {
    WIDTH: 28,
    HEIGHT: 28,
    MARGINBOTTOM: 6,
    TINTCOLOR: 'WHITE',
  },
  FOOTERTEXT: {
    FONTSIZE: 14,
    FONTFAMILY: 'BEBASNEUE-REGULAR',
    COLOR: 'WHITE',
    LETTERSPACING: 0.5,
  },
});

export default MENU;