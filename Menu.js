import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { ImageBackground } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const frases = [
    'Você é mais forte do que imagina. Cada dia é uma nova chance para seguir em frente.',
    'Seu esforço está construindo um futuro incrível.',
    'Tudo o que você precisa já está dentro de você.',
    'Desafios são oportunidades disfarçadas.',
    'Você pode ir além do que imagina.',
    'Não tenha medo de recomeçar. É uma chance de fazer diferente.',
    'Você já superou tanto. Confie no seu caminho.',
    'Cada passo pequeno ainda é progresso.',
    'Você está exatamente onde precisa estar para crescer.',
    'Não desista. Às vezes, é no final da subida que a vista compensa.',
    'Seu valor não depende de um dia ruim.',
    'Respire fundo. Você está indo bem.',
    'Acredite: dias melhores estão vindo.',
    'Mesmo devagar, você está indo na direção certa.',
    'Você é capaz de coisas incríveis.'
  ];

const humorDataDefault = {
  raiva: 0,
  triste: 0,
  media: 0,
  feliz: 0,
  muitofeliz: 0
};

export function Menu({ navigation }) {
  const [frase, setFrase] = useState('');
  const [humorData, setHumorData] = useState(humorDataDefault);

  useEffect(() => {
    const random = Math.floor(Math.random() * frases.length);
    setFrase(frases[random]);
  }, []);

  const registrarHumor = (tipo) => {
    setHumorData((prev) => ({
      ...prev,
      [tipo]: prev[tipo] + 1
    }));
  };

  const data = [
    {
      name: 'Estressado',
      population: humorData.raiva,
      color: '#e52b17',
      legendFontColor: '#000',
      legendFontSize: 12
    },
    {
      name: 'Magoado',
      population: humorData.triste,
      color: '#ff9900',
      legendFontColor: '#000',
      legendFontSize: 12
    },
    {
      name: 'Pensativo',
      population: humorData.media,
      color: '#f2cd20',
      legendFontColor: '#000',
      legendFontSize: 12
    },
    {
      name: 'Bem',
      population: humorData.feliz,
      color: '#66cc33',
      legendFontColor: '#000',
      legendFontSize: 12
    },
    {
      name: 'Ótimo',
      population: humorData.muitofeliz,
      color: '#00bf63',
      legendFontColor: '#000',
      legendFontSize: 12
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>COMO ESTÁ SE SENTINDO HOJE?</Text>
        <Image source={require('./assets/entrar.png')} style={styles.profileIcon} />
      </View>

      <View style={styles.emotionsContainer}>
        <TouchableOpacity onPress={() => registrarHumor('raiva')}>
          <Image source={require('./assets/raiva.png')} style={styles.emoji} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => registrarHumor('triste')}>
          <Image source={require('./assets/triste.png')} style={styles.emoji} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => registrarHumor('media')}>
          <Image source={require('./assets/media.png')} style={styles.emoji} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => registrarHumor('feliz')}>
          <Image source={require('./assets/feliz.png')} style={styles.emoji} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => registrarHumor('muitofeliz')}>
          <Image source={require('./assets/muitofeliz.png')} style={styles.emoji} />
        </TouchableOpacity>
      </View>
      <Image source={require('./assets/barra.png')} style={styles.barra} />

      <ImageBackground
  source={require('./assets/postit.png')}
  style={styles.postit}
  imageStyle={{ resizeMode: 'contain' }}
>
  <Text
    style={styles.frase}
    numberOfLines={6}
    ellipsizeMode="tail"
  >
    {frase}
  </Text>
</ImageBackground>


      <View style={styles.resumoContainer}>
        <Text style={styles.resumoText}>RESUMO SEMANAL</Text>
      </View>

      <PieChart
        data={data}
        width={screenWidth}
        height={180}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        center={[10, 0]}
        absolute
        hasLegend
      />

      {/* FOOTER/MENU */}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0fa'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#5691de',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'BebasNeue-Regular',
    color: 'white'
  },
  profileIcon: {
    width: 35,
    height: 35
  },
  emotionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  emoji: {
    width: 40,
    height: 40,
    marginHorizontal: 8,
  },
  barra: {
    width: '70%',
    height: 10,
    alignSelf: 'center',
    marginVertical: 5,
   justifyContent: 'center'
  },
postit: {
  width: 250,
  height: 180,
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: -3,
  overflow: 'hidden',
  alignSelf: 'center',     
  paddingHorizontal: 10,  
},
frase: {
  color: 'black',
  fontSize: 16,
  fontFamily: 'Spectral-MediumItalic',
  textAlign: 'center',
  lineHeight: 22,
  paddingHorizontal: 10,
  maxWidth: '100%',
  maxHeight: '100%',
},
  resumoContainer: {
    backgroundColor: '#8ca9d2',
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 8,
    alignItems: 'center',
    marginVertical: 10
  },
  resumoText: {
    fontSize: 20,
    fontFamily: 'BebasNeue-Regular',
    color: 'white'
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
});

export default Menu;
