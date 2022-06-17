import LogoImg from "../../assets/logo.svg";
import * as S from "./styles";

type Props={
  handleOpenNewTransactionModal: () => void;
}

const Header = ({handleOpenNewTransactionModal}: Props) => {

  return (
    <S.Container>
      <S.Content>
        <img src={LogoImg} alt="logo" />
        <button type="button" onClick={handleOpenNewTransactionModal}>Nova Transação</button>
      </S.Content>
    </S.Container>
  );
};

export default Header;
