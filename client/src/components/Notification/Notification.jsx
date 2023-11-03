import styled, { keyframes } from "styled-components";

const Notification = ({ errorMessage, successMessage }) => {
  let message = null;
  let messageType = null;
  if (errorMessage) {
    message = errorMessage;
    messageType = "error";
  } else if (successMessage) {
    message = successMessage;
    messageType = "success";
    console.log(`Notification Message: ${message}, Type: ${messageType}`);
  }

  if (!message) {
    return null;
  }

  return (
    <Toast $messageType={messageType}>
      {message}
    </Toast>
  );
};

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
  background: ${({ $messageType }) => ($messageType === "error" ? "red" : "green")};
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
    content: ${({ $messageType }) => ($messageType === "error" ? '"⚠️"' : '"✅"')};
    display: inline-block;
    margin-right: 12px;
  }
`;


