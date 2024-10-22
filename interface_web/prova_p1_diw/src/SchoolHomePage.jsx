import styled from 'styled-components';

// Estilos simplificados
const Container = styled.div`
  text-align: center; 
  padding: 20px;
  background-color: #f9f9f9;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

const AccessButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

// Componente SchoolHomePage
const SchoolHomePage = () => {
  const handleAccessClick = () => {
    alert('Bem-vindo ao sistema de gestão escolar!');
  };

  return (
    <Container>
      <Title>Escola ABC</Title>
      <Description>
        Bem-vindo ao sistema de gestão escolar da Escola ABC. Aqui você pode
        gerenciar turmas, estudantes e muito mais.
      </Description>
      <AccessButton onClick={handleAccessClick}>Acessar Sistema</AccessButton>
    </Container>
  );
};

export default SchoolHomePage;
