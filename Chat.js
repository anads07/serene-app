import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Chat = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResponse, setShowResponse] = useState(false);
  const [conversation, setConversation] = useState([]);

  // Defina o chatFlow antes de qualquer uso
  const chatFlow = [
    {
      question: "Olá! Sou o seu assistente de bem-estar. Como posso te ajudar hoje?",
      options: [
        "Estou me sentindo ansioso/preocupado",
        "Estou me sentindo triste/desanimado",
        "Estou me sentindo estressado/irritado",
        "Quero compartilhar algo positivo!"
      ],
      responses: [
        "Entendo que a ansiedade pode ser difícil. Você não está sozinho nisso.",
        "A tristeza é uma emoção válida. Estou aqui para te ouvir.",
        "O estresse pode ser desgastante. Vamos encontrar formas de aliviar isso juntos.",
        "Que ótimo! Fico feliz em ouvir boas notícias!"
      ]
    },
    {
      question: "Você poderia me contar um pouco mais sobre o que está sentindo?",
      options: [
        "Tenho muitos pensamentos negativos",
        "Estou com dificuldade para relaxar",
        "Estou tendo problemas para dormir",
        "Sinto que ninguém me entende"
      ],
      responses: [
        "Pensamentos negativos são comuns, mas não definem quem você é.",
        "Vamos tentar uma técnica de respiração: inspire por 4 segundos, segure por 4 e expire por 6.",
        "Uma rotina noturna tranquila pode ajudar a melhorar seu sono.",
        "Seus sentimentos são importantes. Eu estou aqui para te ouvir."
      ]
    },
    {
      question: "Aqui estão algumas sugestões que podem te ajudar:",
      options: [
        "Praticar respiração profunda",
        "Fazer uma caminhada curta",
        "Escrever um diário",
        "Conversar com um amigo"
      ],
      responses: [
        "Respirar fundo acalma o sistema nervoso. Tente agora mesmo!",
        "O movimento físico libera endorfinas que melhoram o humor.",
        "Escrever pode organizar seus pensamentos e aliviar a mente.",
        "Compartilhar com alguém de confiança pode trazer alívio."
      ]
    }
  ];

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [conversation, showResponse]);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowResponse(true);
    
    const newConversation = [
      ...conversation,
      { type: 'user', text: chatFlow[currentStep].options[optionIndex] },
      { type: 'bot', text: chatFlow[currentStep].responses[optionIndex] }
    ];
    setConversation(newConversation);

    setTimeout(() => {
      if (currentStep < chatFlow.length - 1) {
        setCurrentStep(currentStep + 1);
        setShowResponse(false);
        setSelectedOption(null);
      }
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90} // Ajuste conforme altura do header
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <MaterialIcons name="arrow-back" size={24} color="#0c4793" />
        </TouchableOpacity>
        <View style={styles.botTitleContainer}>
          <Text style={styles.botTitle}>Chat Bot</Text>
          <Text style={styles.botStatus}>Online</Text>
        </View>
        <Image 
          source={require('./assets/robo.png')} 
          style={styles.botIcon}
          resizeMode="contain"
        />
      </View>
  
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.chatContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.botMessage}>
          <Text style={styles.botMessageText}>{chatFlow[currentStep].question}</Text>
        </View>
  
        {conversation.map((msg, index) => (
          <View 
            key={index}
            style={msg.type === 'bot' ? styles.botMessage : styles.userMessage}
          >
            <Text style={msg.type === 'bot' ? styles.botMessageText : styles.userMessageText}>
              {msg.text}
            </Text>
          </View>
        ))}
  
        {showResponse && selectedOption !== null && (
          <View style={styles.botMessage}>
            <Text style={styles.botMessageText}>
              {chatFlow[currentStep].responses[selectedOption]}
            </Text>
          </View>
        )}
      </ScrollView>
  
      {!showResponse && (
        <View style={styles.optionsContainer}>
          {chatFlow[currentStep].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleOptionSelect(index)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f9fc',
  },
  flex1: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#a2caff',
    borderBottomWidth: 1,
    borderBottomColor: '#1C86EE',
  },
  botTitleContainer: {
    alignItems: 'center',
  },
  botTitle: {
    color: '#0c4793',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botStatus: {
    color: '#0c4793',
    fontSize: 14,
    opacity: 0.8,
  },
  botIcon: {
    width: 30,
    height: 30,
  },
  chatContent: {
    padding: 15,
    paddingBottom: 150, // Espaço extra para as opções
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#d1eaf5',
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    padding: 15,
    marginBottom: 10,
    maxWidth: width * 0.8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#8ca9d2',
    borderRadius: 15,
    borderBottomRightRadius: 0,
    padding: 15,
    marginBottom: 10,
    maxWidth: width * 0.8,
  },
  botMessageText: {
    color: '#0c4793',
    fontSize: 16,
  },
  userMessageText: {
    color: '#fff',
    fontSize: 16,
  },
 optionsContainer: {
  padding: 15,
  backgroundColor: '#f5f9fc',
  borderTopWidth: 1,
  borderTopColor: '#dde8f5',
},
  optionButton: {
    backgroundColor: '#84a9da',
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  spacer: {
    height: 100,
  },
});

export default Chat;