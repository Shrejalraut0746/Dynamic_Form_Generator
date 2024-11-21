import React, { useState } from 'react';

interface JsonEditorProps {
  onChange: (json: string) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onChange }) => {
  const [json, setJson] = useState<string>('{}');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    setJson(input);

    try {
      JSON.parse(input);
      setError(null);
      onChange(input);
    } catch (err) {
      setError('Invalid JSON');
    }
  };

  return (
    <div>
      <textarea
        value={json}
        onChange={handleChange}
        className="w-full h-80 border rounded p-2"
      />
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default JsonEditor;
