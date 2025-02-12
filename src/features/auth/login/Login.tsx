// import styles from './Login.module.css'
import * as Yup from 'yup';
import { useFormik } from "formik";
import MyInput from '../../../components/myInput/MyInput';
import MyButton from "../../../components/myButton/MyButton";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loginAction } from "../authActions";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/loader/Loader";

export const schema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});


export default function Login(): JSX.Element {

  // забираем ошибку из redux
  const { error, isLoading } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();
  // ! подготавливаем функцию для переадресации navigate()
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: 'emilys',
      password: 'emilyspass'
    } as { username: string; password: string; },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      // проверяем получение данных с сервера
      const user = await dispatch(loginAction(values)).unwrap();
      // если данные получены - делаем переадресацию
      if (user) {
        // ! переадресация на главную произойдет только после того, как мы проверим получены ли данные в ответ на запрос dispatch
        navigate('/');
      }
      resetForm();
    }
  });

  return (
    <div>
      {/* показываем loader в то время когда идет загрузка данных */}
      {isLoading ? <Loader /> : <>
        <h2>Login 🔐</h2>
        <form onSubmit={formik.handleSubmit}>
          <MyInput name="username" formik={formik} label="Username:" placeholder="type your username" />
          <MyInput name="password" formik={formik} label="Password:" placeholder="type your password" />
          <MyButton text="sign in" />
        </form>
        {error && <span style={{ color: 'red' }}>{error === 'Request failed with status code 404' ? 'request error 404' : error === 'Request failed with status code 400' ? 'mistake in username or pass' : ''}</span>}
      </>}
    </div>
  );
}
