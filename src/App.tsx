import React, { useState } from 'react';
import JsonEditor from './components/JsonEditor';
import FormGenerator from './components/FormGenerator';

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState('');

  const handleJsonChange = (json: string) => {
    setJsonSchema(json);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4 border-r">
        <h2 className="text-lg font-bold mb-2">JSON Editor</h2>
        <JsonEditor onChange={handleJsonChange} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-lg font-bold mb-2">Form Preview</h2>
        <FormGenerator schema={jsonSchema} />
      </div>
    </div>
  );
};

export default App;
