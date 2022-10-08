import { Container, Form, Modal, ModalInfo } from "./styles";

export const Login = () => {
  return (
    <Container>
      <Modal>
        <ModalInfo>
          <h1>Login</h1>
          <span />
          <h3>Bem-vindo ao melhor sistema de café que existe.</h3>
          <h3>Utilize seu pin de acesso para entrar</h3>
        </ModalInfo>
        <Form>
          <h2>Pin de acesso:</h2>
          <input placeholder="Número do pin" type="text" />
          <div>
            <button>Entrar</button>
          </div>
        </Form>
      </Modal>
    </Container>
  );
};
