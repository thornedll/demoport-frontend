import { useNavigate } from "react-router-dom";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { logoBig } from "../../../img";
import Button from "../../ui/Button";
import InputText from "../../ui/InputText";
import style from "./styles/auth-page.module.scss";
import data from "../../../data.json";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Неверная электронная почта")
    .required("Необходимо ввести электронную почту")
    .trim(),
  password: Yup.string()
    .min(8, "Пароль должен содержать не менее 8 символов")
    .required("Необходимо ввести пароль")
    .trim()
});

const AuthPage = (loggedIn = false) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      if (
        formik.values.email === data.users[0].email &&
        formik.values.password === data.users[0].password
      ) {
        loggedIn = true;
        navigate("/");
      } else {
        formik.errors.email = "Неверная электронная почта или пароль";
      }
      console.log(loggedIn);
    }
  });

  return (
    <div className={style["auth"]}>
      <div className={style["auth__wrapper"]}>
        <img src={logoBig} alt="logo" className={style["img-logo"]} />
        <Formik validateOnChange={false}>
          <Form onSubmit={formik.handleSubmit}>
            <InputText
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Электронная почта"
              errors={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
            />
            <InputText
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Пароль"
              errors={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
            />
            <Button type="submit" btnName="Войти" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AuthPage;
