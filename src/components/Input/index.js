import { InputContainer } from "./styles";

function Input({value}) {
  return (
    <InputContainer>
      <input disabled value={value} style={{textAlign: 'right'}}/>
    </InputContainer>
  );
}

export default Input;
