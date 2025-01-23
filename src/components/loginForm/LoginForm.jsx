import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/Myinput";
import './loginForm.css'

function LoginForm() {
  return (
    <form className="myForm">
      <MyInput name={'login'} label={'login'} type={'text'} placeholder={'your login name'}  />
      <MyInput name={'email'} label={'email'} type={'email'} placeholder={'your unique email'}  />
      <MyInput name={'password'} label={'password'} type={'password'} placeholder={'secret password'}  />
      <MyButton type={'submit'} text={'send data'} />
    </form>
  );
}

export default LoginForm;
