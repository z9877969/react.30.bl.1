import { useDispatch } from "react-redux";
import AuthForm from "../AuthForm/AuthForm";
import { login, register } from "../../redux/auth/authOperations";

const initialValues = {
  login: {
    email: "",
    password: "",
  },
  register: {
    // login: "",
    email: "",
    password: "",
  },
};

const AuthPage = ({ match }) => {
  const dispatch = useDispatch();
  const {
    params: { authType },
  } = match;
  const { login: loginValues, register: registerValues } = initialValues;

  const handleSubmit = (data) =>
    authType === "register" ? dispatch(register(data)) : dispatch(login(data));

  return (
    <>
      <h1>AuthPage</h1>
      <AuthForm
        authType={authType}
        handleSubmit={handleSubmit}
        initialValues={authType === "register" ? registerValues : loginValues}
      />
    </>
  );
};

export default AuthPage;
