import { Outlet } from 'react-router-dom';
import * as S from './styles';

const Auth = () => (
  <S.Background>
    <S.Bevel />
    <S.FormContainer>
      <Outlet />
    </S.FormContainer>
  </S.Background>
);

export default Auth;
