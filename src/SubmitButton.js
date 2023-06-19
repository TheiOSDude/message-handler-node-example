import React from 'react';

const SubmitButton = () => {
  const handleClick = () => {
    const data = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    };

    const jsonData = JSON.stringify(data);

    window.webkit.messageHandlers.testHandlerName.postMessage(jsonData);
  };

  return (
    <button onClick={handleClick}>Submit JSON</button>
  );
};

export default SubmitButton;
