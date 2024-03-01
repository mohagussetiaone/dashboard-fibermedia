import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import supabase from 'config/supabaseClient';
import { set } from 'store/Local/Forage';
import toast from 'react-hot-toast';
import { useProfileStore } from 'store/Profile/StoreProfile';
import { MdArrowBack } from 'react-icons/md';

const SignIn = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setProfile } = useProfileStore();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // useEffect(() => {
  //   const rememberMeValue = localStorage.getItem("rememberMe") === "true";
  //   setRememberMe(rememberMeValue);
  //   const savedEmail = localStorage.getItem("email") || "";
  //   const savedPassword = localStorage.getItem("password") || "";

  //   if (rememberMeValue) {
  //     setValue("email", savedEmail);
  //     setValue("password", savedPassword);
  //   } else {
  //     setValue("email", "");
  //     setValue("password", "");
  //     localStorage.removeItem("email");
  //     localStorage.removeItem("password");
  //   }
  // }, [setRememberMe, setValue]);

  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    console.log('data', data);
    if (error) {
      alert('failed to login');
    }
  };

  const handleSignInWithEmailPassword = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('Email dan Password harus diisi');
      return;
    }
    const loadingToast = toast.loading('Memproses login...');
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      setTimeout(async () => {
        toast.dismiss(loadingToast);
        if (data) {
          const token = data?.session?.access_token;
          const dataProfile = data?.user;
          set(token);
          setProfile(dataProfile);
          toast.success('Login Berhasil', {
            duration: 1900,
          });
          navigate('/dashboard');
        }
        if (error) throw new Error(error.message);
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        toast.dismiss(loadingToast);
        toast.error(error.message || 'Terjadi kesalahan saat login', {
          duration: 4000,
        });
      }, 2000);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/2 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100 px-14">
          <h1 className="text-xl flex justify-center text-black md:text-2xl font-bold leading-tight mt-4">
            Log in ke akun anda
          </h1>
          <form className="mt-6 px-2" action="#" method="POST">
            <div>
              <label className="flex justify-start text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Masukkan email anda"
                className="w-full text-black px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="on"
                required
              />
            </div>
            <div className="mt-4">
              <label className="flex justify-start text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Masukkan Password anda"
                  minLength="6"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full text-black px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 mt-2 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <AiOutlineEye className="text-gray-500 w-5 h-5" />
                  ) : (
                    <AiOutlineEyeInvisible className="text-gray-500 w-5 h-5" />
                  )}
                </span>
              </div>
            </div>
            <div className="text-right flex justify-between mt-2">
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex items-center mb-2">
                  <input
                    className="h-4 w-4 bg-white dark:bg-white mr-2 leading-tight"
                    type="checkbox"
                    id="rememberMeCheckbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label
                    className="text-sm text-gray-700"
                    htmlFor="rememberMeCheckbox"
                  >
                    Ingat Saya
                  </label>
                </div>
              </div>
              <div>
                <Link
                  to="/reset-password"
                  className="text-sm font-semibold text-blue-500 hover:text-blue-700 focus:text-blue-700"
                >
                  Lupa Password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full block bg-blue-600 hover:bg-blue-700 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-2"
              onClick={handleSignInWithEmailPassword}
            >
              Log In
            </button>
          </form>
          <div className="flex items-center justify-center my-6">
            <hr className="border-gray-300 w-full" />
            <span className="px-4 text-gray-500">Atau</span>
            <hr className="border-gray-300 w-full" />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="w-[325px] md:w-[350px] md:px-14 bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg py-3 border border-gray-300"
            >
              <div
                className="flex items-center justify-center"
                onClick={handleLoginWithGoogle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <span className="md:ml-4 ml-2">Log in dengan Google</span>
              </div>
            </button>
          </div>
          <p className="mt-2 flex justify-start text-black">
            Butuh akun?{' '}
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              {'  '}Buat akun
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default SignIn;
