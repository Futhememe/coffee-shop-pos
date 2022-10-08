import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  flex: 1;

  display: flex;

  align-items: center;
  justify-content: center;

  background-color: #CCF9D7;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;

  background: #FFFFFF;
  box-shadow: 0px 4px 11px rgba(122, 121, 121, 0.25);
  border-radius: 10px;
`

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  span {
    position: absolute;
    width: 105px;
    height: 18px;
    background: #66DF9C;

    top: 20px;
  }

  h1 {
    font-size: 2rem;
    padding-left: 4px;
    margin-bottom: 1rem;
    z-index: 2;
  }

  h3 {
    color: #717171;
    font-size: 1.25rem;
    font-weight: 500;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #E7E7E7;
    border-radius: 6px;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: flex-end;

    margin-top: 1.25rem;
  }

  button {
    padding: 0.5rem 1rem;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.25rem;

    background: #66DF9C;
  }
`