import { Link } from "react-router-dom";
import { useFormik } from "formik";
import LabelInput from "../_share/LabelInput/LabelInput";
import Button from "../_share/Button/Button";

const AuthForm = ({ authType, initialValues, handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmit({ ...values, returnSecureToken: true });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* {authType === "register" && (
        <LabelInput
          name="login"
          value={formik.values.login}
          cbOnChange={formik.handleChange}
          title="Login"
          placeholder="Input login..."
        />
      )} */}
      <LabelInput
        name="email"
        value={formik.values.email}
        cbOnChange={formik.handleChange}
        title="Email"
        placeholder="Input email..."
      />
      <LabelInput
        name="password"
        value={formik.values.password}
        cbOnChange={formik.handleChange}
        title="Password"
        placeholder="Input password..."
      />
      <Button
        title={authType === "register" ? "SignUp" : "LogIn"}
        type="submit"
      />
      <Link to={authType === "register" ? "/auth/login" : "/auth/register"}>
        {authType === "register" ? "LogIn" : "SignUp"}
      </Link>
    </form>
  );
};

export default AuthForm;
