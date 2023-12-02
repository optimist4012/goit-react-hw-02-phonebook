import styled from 'styled-components';

export const Button = styled.button`
  text-transform: capitalize;
  width: 80px;
  height: 46px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #f18230;
  border: 1px solid #f18230;
  border-radius: 25px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px lightskyblue;
  }
  &:hover {
    background-color: #fba768;
  }
  &:active {
    background-color: #c17237;
  }
`;
