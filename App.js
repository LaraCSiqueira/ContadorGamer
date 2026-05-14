// Importa o React e o UseState
// useState serve para criar valores que podem mudar na tela
import React, {useState} from "react";

//Importa componentes nativos do react-native
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native-web";
// VIEW: Caixa ou área da tela
// TEXT: Textos
// BUTTON: Botão
// STYLESHEET: Estilos
// TOUCHABLEOPACITY: Botão customizável


// Componente principal APP
export default function App(){
  const [pontos, setPontos] = useState(0); // Cria uma estado (variável php) chamado "pontos"
  //PONTOS: Valor atual
  //SETPONTOS: Função para alterar o valor
  // 0 = VALOR INICIAL

  function aumentar(){  // Função para AUMENTAR 1 ponto
    setPontos(pontos +1); // Pega o valor alto e soma +1
  }

  function diminuir(){  // Função para DIMINUIR 1 ponto
    setPontos(pontos-1); // Pega o valor atual e subtrai -1
  }

  function resetar(){  // Função para RESETAR o contador
    setPontos(0); // Volta o valor para zero
  }

  // Tudo que esta no RETURN aparece na tela
  return (
     <View style={styles.container}>
      <Text style={styles.titulo}>
        🎮 Contador Gamer
      </Text>
      <Text style={styles.pontos}> {pontos} </Text>
      <View style={styles.areaBotoes}>
        <TouchableOpacity onPress={aumentar} style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={diminuir} style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={resetar} style={styles.botaoReset}>
       <Text style={styles.textoBotao}>Resetar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'#121212',
    alignItems:'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo:{
    fontSize: 32,
    color: '#00ff88',
    fontWeight: 'bold',
    marginBottom: 30,
  },

  pontos:{
    fontSize: 80,
    color: '#ffffff',
    marginBottom: 40,
    fontWeight: 'bold',
  },

  areaBotoes:{
    flexDirection: 'row',
    marginBottom: 20,
  },

  // Estilo do botão
  botao:{
    backgroundColor: '#00ff88', // Cor verde
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12, // Bordas arredondadas
    marginHorizontal: 10,
  },

  botaoReset:{
    backgroundColor: '#ff3b30', // Cor vermelha
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12, // Bordas arredondadas
  },

  // Estilo do texto dos botões
  textoBotao:{
    fontSize: 22, // Tamanho da letra
    color: '#000', // Cor do texto
    fontWeight: 'bold', // Texto em negrito
  }

});