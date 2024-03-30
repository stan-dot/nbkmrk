import React, { useState } from 'react';

function RegexInput() {
  const [regexInput, setRegexInput] = useState<string>('');
  const [isValidRegex, setIsValidRegex] = useState<boolean>(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setRegexInput(value);
    validateRegex(value);
  };

  const validateRegex = (input) => {
    try {
      new RegExp(input);
      setIsValidRegex(true);
    } catch (e) {
      setIsValidRegex(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={regexInput}
        onChange={handleInputChange}
        style={{ borderColor: isValidRegex ? 'green' : 'red' }}
      />
      {!isValidRegex && <p style={{ color: 'red' }}>Invalid Regex</p>}
    </div>
  );
}

export default RegexInput;
