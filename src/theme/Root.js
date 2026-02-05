import React from 'react';
import ChatbotButton from '@site/src/components/ChatbotButton';

function Root({ children }) {
  return (
    <>
      {children}
      <ChatbotButton />
    </>
  );
}

export default Root;