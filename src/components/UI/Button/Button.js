import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  font: inherit;
  border: 1px solid #8b005d;
  color: #fff;
  background-color: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 0.5rem 1.5rem;

  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background-color: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
  @media (min-width: 768px) {
    width: auto;
  }
`;

export default Button;
