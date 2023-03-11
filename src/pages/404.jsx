import Layout from '../components/Layout.jsx';
import Logo from '../assets/img/todo-mascott.png';
import Button from '../components/Button';
import StyledLink from '../components/StyledLink';

export default function Page404() {
  return (
    <Layout>
      <div className="px-6 grid place-items-center gap-6 my-16">
        <img src={Logo} alt="Mascott" className="h-36" />
        <h1 className="text-9xl text-center font-semibold">404</h1>
        <h2>Oops, something went wrong!</h2>
        <Button variant="primary" text="Back to homepage" to="/" />
        <StyledLink to="login">Log in</StyledLink>
      </div>
    </Layout>
  );
}
