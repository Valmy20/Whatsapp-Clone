export const updateValuesLoginSigup = (value, input) => {
  switch (input) {
    case 'name': return { type: 'change_name', payload: value };
    case 'email': return { type: 'change_email', payload: value };
    case 'password': return { type: 'change_password', payload: value };
    default: return value;
  }
};
