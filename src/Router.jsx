import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import {Routes, Route} from 'react-router-dom';
import {
  Home,
  Login,
  NotFound,
  Dashboard,
  ResetPassword,
  ForgotPassword,
} from './pages';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/" element={<AuthRoute />}>
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route
          path="/restablecer-contraseña/:token"
          element={<ResetPassword />}
        />
        <Route path="/recuperar-contraseña" element={<ForgotPassword />} />
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/plataforma/*" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
