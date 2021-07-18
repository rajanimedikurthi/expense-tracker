import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem;
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "rgb(240, 5, 5)" : "#ccc")};
    background-color: ${(props) =>
      props.invalid ? "rgb(250, 128, 114)" : "transparent"};
  }

  & label {
    color: ${(props) => (props.invalid ? "rgb(240, 5, 5)" : "inherit")};
  }
  & input:focus {
    outline: none;
    background-color: #d4c197;
    border-color: #d89707;
  }
`;
export default FormControl;
