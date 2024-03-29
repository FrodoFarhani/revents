import React from 'react';
import { Form, Label, Select } from 'semantic-ui-react';

function SelectInput({
  input,
  type,
  placeholder,
  multiple,
  options,
  meta: { touched, error }
}) {
  return (
    <Form.Field error={touched && !!error}>
      {/* console log input to see what is in it so we over write it  */}
      <Select
        value={input.value || null}
        onChange={(e, data) => input.onChange(data.value)}
        placeholder={placeholder}
        options={options}
        multiple={multiple}
      />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
}

export default SelectInput;
