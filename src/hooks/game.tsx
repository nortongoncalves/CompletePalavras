import React, {createContext, useContext, useState, useCallback} from 'react';

interface GameState {
  isWinner: boolean;
  word: string;
  placeholder: string;
  icon: string;
}

interface GameContextData {
  game: GameState;
  initializeGame(): void;
  verifyWord(valueInput: string): void;
}

const GameContext = createContext<GameContextData>({} as GameContextData);

export const GameProvider: React.FC = ({children}) => {
  const [game, setGame] = useState<GameState>({} as GameState);

  const arrayItens = [
    {word: 'Carro', icon: 'car', placeholder: 'Car__'},
    {word: 'Sofá', icon: 'couch', placeholder: 'So__'},
    {word: 'Igreja', icon: 'church', placeholder: '__reja'},
    {word: 'Bomba', icon: 'bomb', placeholder: 'Bom__'},
  ];

  const randomItens = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * (arrayItens.length - 0) + 0);
    return arrayItens[randomIndex];
  }, [arrayItens]);

  const initializeGame = useCallback(() => {
    const item = randomItens();
    setGame({
      icon: item.icon,
      isWinner: false,
      placeholder: item.placeholder,
      word: item.word,
    });
  }, [randomItens]);

  const verifyWord = useCallback(
    valueInput => {
      const parsedValueInput = String(valueInput).toLowerCase();
      const parsedWord = String(game.word).toLowerCase();

      const isWinner = parsedValueInput === parsedWord;

      if (isWinner) {
        setGame({...game, isWinner});
        return true;
      }

      return false;
    },
    [game],
  );

  return (
    <GameContext.Provider value={{game, initializeGame, verifyWord}}>
      {children}
    </GameContext.Provider>
  );
};

export function useGame(): GameContextData {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used within an GameProvider');
  }

  return context;
}
