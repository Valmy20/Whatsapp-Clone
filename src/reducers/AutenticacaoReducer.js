const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'change_name':
      return { ...state, name: action.payload };
    case 'change_email':
      return { ...state, email: action.payload };
    case 'change_password':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
