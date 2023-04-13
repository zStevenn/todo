import Logo from '../assets/img/todo-mascott.png';
import Button from '../components/Button';
import StyledLink from '../components/StyledLink';
import { FaFigma } from 'react-icons/fa';
import { SiFirebase, SiReact, SiTailwindcss, SiVite } from 'react-icons/si';
import useFadeIn from '../hooks/useFadeIn';

export default function Home() {
  const heroRef = useFadeIn();
  const createdRef = useFadeIn();

  return (
    <>
      <div
        ref={heroRef}
        className="px-6 grid place-items-center gap-6 my-16 transition-all duration-1000 opacity-0 -translate-x-32"
      >
        <img src={Logo} alt="Mascott" className="max-h-36" />
        <h1 className="text-2xl text-center tracking-wide">
          Stay ahead of your <strong className="text-primary">tasks</strong> and
          <br />
          increase <strong className="text-primary">productivity</strong>!
        </h1>
        <Button variant="secondary" text="Register now" to="/register" />
        <StyledLink to="login">Log in</StyledLink>
      </div>
      <div className="p-6 bg-secondary text-white grid place-items-center gap-6">
        <h2 className="text-center text-lg">Created with</h2>
        <div
          ref={createdRef}
          className="flex flex-row flex-wrap gap-4 justify-center items-center transition-all duration-1000 opacity-0 -translate-x-32"
        >
          <FaFigma className="text-6xl" />
          <SiTailwindcss className="text-6xl" />
          <SiFirebase className="text-6xl" />
          <SiReact className="text-6xl" />
          <SiVite className="text-6xl" />
        </div>
      </div>
      <div className="p-6 grid place-items-center gap-6">
        <h2 className="text-center text-lg">The process</h2>
        <p>Lorem ipsum</p>
      </div>
    </>
  );
}
