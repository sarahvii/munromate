import styled, { keyframes } from "styled-components";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  return (
    <Toast>
      {message}
    </Toast>
  );
}

export default Notification;

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const Toast = styled.div`
  color: white;
  background: red;
  font-size: 16px;
  border-radius: 5px;
  padding: 20px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  animation: ${slideIn} 0.5s forwards, ${slideOut} 0.5s forwards 3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  &:before {
    content: "⚠️";
    display: inline-block;
    margin-right: 12px;
  }
`;

