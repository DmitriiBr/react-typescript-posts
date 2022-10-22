import React from 'react';

interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  label: string;
}
const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  return (
    <label className="flex flex-col text-left mb-2">
      <span className="ml-2">{label}</span>
      <textarea
        className="border border-gray-500 rounded py-1 px-2 text-xl mt-1 h-20"
        {...props}
      />
    </label>
  );
};

export default TextArea;
