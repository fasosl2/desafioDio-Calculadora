import{Container,Content,ButtonsContainer,NumbersContainer,RightOperatorsContainer,TopOperatorsContainer} from './styles'
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [lastOperation, setLastOperation] = useState(false);
  const [endOperation, setEndOperation] = useState(false);

  const handleClickDigit = (digit) =>{
    if(isNaN(digit)){
      handleDigits(digit);
    } else {
      setCurrentNumber(prev => `${prev === '0' || endOperation ? '' : prev}${digit}`);
      setEndOperation(false);
    }
  }
  
  const handleOnClear = () =>{
    setCurrentNumber('0');
    setFirstNumber('0');
    setLastOperation(false);
    setEndOperation(false);
  }
  const handleDigits = (digit) =>{
    switch(digit){
      case 'c':
        handleOnClear();
        break;
      case '=':
        handleOperation(lastOperation);
        setEndOperation(true);
        setFirstNumber('0');
        break;
      default:
        if(firstNumber === '0'){
          setFirstNumber(String(currentNumber));
          setCurrentNumber('0');
        } else {
          const result = handleOperation(digit);
          setFirstNumber(String(result));
          setEndOperation(true);
        }
        setLastOperation(digit);
        console.log(digit);
        break;
    }
  }
  const handleOperation = (digit) =>{
    let result = 0;
    switch(digit){
      case '+':
        result = Number(firstNumber) +  Number(currentNumber);
        break;
      case '-':
        result = Number(firstNumber) -  Number(currentNumber);
        break;
      case 'x':
        result = Number(firstNumber) *  Number(currentNumber);
        break;
      case '÷':
        result = Number(firstNumber) /  Number(currentNumber);
        break;
        default:
        break;
    }
    setCurrentNumber(String(result));
    return result;
  }

  const newButton = digit => <Button label={digit} key={digit} onClick={() => handleClickDigit(digit)}/>;
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <ButtonsContainer>
          <TopOperatorsContainer>
          { 
            ['+','-','x','÷'].map(newButton)
          }
          </TopOperatorsContainer>
          <NumbersContainer>
            { 
              [1,2,3,4,5,6,7,8,9].map(newButton)
            }
          </NumbersContainer>
          <RightOperatorsContainer>
          { 
            ['c','=',0].map(newButton)
          }
          
          </RightOperatorsContainer>
        </ButtonsContainer>
      </Content>
    </Container>
  );
}

export default App;
