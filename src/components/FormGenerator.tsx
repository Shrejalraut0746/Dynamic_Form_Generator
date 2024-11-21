import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormField {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  validation?: {
    pattern?: string;
    message?: string;
  };
  options?: { value: string; label: string }[];
}

interface JsonSchema {
  formTitle?: string;
  formDescription?: string;
  fields: FormField[];
}

interface FormGeneratorProps {
  schema: string;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let parsedSchema: JsonSchema | null = null;

  try {
    parsedSchema = JSON.parse(schema);
  } catch {
    return <div className="text-red-500">Invalid JSON schema</div>;
  }

  const onSubmit: SubmitHandler<any> = data => {
    console.log('Form Submitted:', data);
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {parsedSchema?.formTitle && <h1 className="text-2xl font-bold">{parsedSchema.formTitle}</h1>}
      {parsedSchema?.formDescription && <p className="text-gray-600 mb-4">{parsedSchema.formDescription}</p>}
      {parsedSchema?.fields.map(field => (
        <div key={field.id} className="mb-4">
          <label className="block text-sm font-medium mb-1">{field.label}</label>
          {field.type === 'text' && (
            <input
              {...register(field.id, {
                required: field.required,
                pattern: field.validation?.pattern ? new RegExp(field.validation.pattern) : undefined,
              })}
              placeholder={field.placeholder}
              className="border p-2 w-full"
            />
          )}
          {/* Handle other input types similarly */}
          {errors[field.id] && <span className="text-red-500">{field.validation?.message || 'This field is required'}</span>}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default FormGenerator;
