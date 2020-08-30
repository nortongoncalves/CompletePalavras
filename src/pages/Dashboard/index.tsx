import React, {useState, useEffect, useCallback} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  Alert,
} from 'react-native';
import {useGame} from '../../hooks/game';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../components/Button';
import {Container, Title, BlockIcon} from './styles';
import Input from '../../components/Input';

interface IGame {
  word: string;
  icon: string;
  placeholder: string;
}

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {game, initializeGame} = useGame();

  useEffect(() => {
    initializeGame();
  }, []);

  const handleButtonSwap = useCallback(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (game) {
      setIsLoading(true);
    }
  }, [game]);

  useEffect(() => {
    if (game.isWinner) {
      Alert.alert('você acertou');
      initializeGame();
    }
  }, [game, initializeGame]);

  console.log(game);
  if (isLoading) {
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <Container>
            <Title>Complete Palavras</Title>
            <BlockIcon>
              <Icon name={game.icon} size={130} color="#333333" />
            </BlockIcon>
            <Input placeholder={game.placeholder} />
            <Button
              color="#4bcd40"
              onPress={() => {
                console.log('botão speak');
              }}>
              Falar
            </Button>
            <Button color="#e55656" onPress={handleButtonSwap}>
              Trocar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};

export default Dashboard;
