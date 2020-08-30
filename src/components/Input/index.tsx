import React, {useCallback, useState, useRef, MutableRefObject} from 'react';
import {TextInput} from 'react-native';
import {Container} from './styles';
import {useGame} from '../../hooks/game';

interface InputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({placeholder, ...rest}) => {
  const inputRef: MutableRefObject<TextInput> = useRef(null);
  const [valueInput, setValueInput] = useState('');
  const [borderColor, setBorderColor] = useState('#131313');
  const {verifyWord} = useGame();
  const handleFocus = useCallback(() => {
    const arrayOfString = placeholder.split('_');

    const [parsedString] = arrayOfString.filter(
      stringValue => stringValue.length > 0,
    );
    setValueInput(parsedString);
    setBorderColor('#d9d9d9');
  }, [placeholder]);

  const handleBlur = useCallback(() => {
    setValueInput('');
    setBorderColor('#131313');
  }, []);

  const handleChangeText = useCallback(
    text => {
      setValueInput(text);
      const isWinner: boolean = verifyWord(text);

      if (isWinner) {
        inputRef.current.blur();
      }
    },
    [verifyWord],
  );

  return (
    <Container
      value={valueInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      onChangeText={handleChangeText}
      borderColor={borderColor}
      ref={inputRef}
      {...rest}
    />
  );
};

export default Input;
