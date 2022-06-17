import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Form = styled.form`
  padding: 2rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-title);
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border-radius: 0.25rem;

    border: 1px solid var(--shape);
    background: #ecf0f1;
    color: var(--text-body);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 3rem;
    border-radius: 0.25rem;
    color: #fff;
    background: var(--green);
    border: none;
    margin-top: 1rem;
    font-size: 1rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionType = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

type ButtonProps = {
  isActive: boolean;
  activeColor: 'green'|'red';
};

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  height: 3rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;

  background: ${(props: { isActive: boolean, activeColor: string }) =>
    props.isActive ? transparentize(0.9, props.activeColor) : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    border-color: ${darken(0.4, "#d7d7d7")};
  }

  img {
    height: 1.5rem;
    width: 1.5rem;
  }

  span {
    font-size: 1rem;
    display: inline-block;
    color: var(--text-body);
  }
`;
