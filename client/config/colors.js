import styled from "styled-components/native";

export default {
  primary: "#009aff",
  white: "#fffdf7",
  black: "#000000",
};

export const COLORS = {
  primary: "#009aff",
  white: "#fffdf7",
  black: "#000000",
};

export const EnterButton = styled.TouchableOpacity`
  background-color: #009aff;
  padding-top: 10px;
  padding-bottom: 10px;
  /* paddingHorizontal: 30px; */
  margin-right: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 20px;
`;
export const Container = styled.KeyboardAvoidingView`
  background-color: ${COLORS.primary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const LoginText = styled.Text`
  font-size: 35px;
  font-weight: bold;
  margin: 10px;
`;
export const Login = styled.View`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 300px;
  height: 420px;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;
`;
export const Input = styled.TextInput`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 10px;
  width: 250px;
`;
export const StyledButton = styled.TouchableOpacity`
  background: ${COLORS.primary};
  padding: 10px;
  margin: 10px;
  width: 150px;
  border: none;
  border-radius: 10px;
`;

export const StyledButtonText = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
`;

export const RegisterBtn = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${COLORS.primary};
  padding-top: 30px;
`;
