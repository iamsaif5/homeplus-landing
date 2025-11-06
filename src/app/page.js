import Header from '@/component/Home/Header';
import HowItWork from '@/component/Home/HowItWork';
import Resources from '@/component/Home/Resources';
import Simplify from '@/component/Home/Simplify';
import Testimonials from '@/component/Home/Testimonials';
import YourHome from '@/component/Home/YourHome';

export default function Home() {
  return (
    <>
      <Header />
      <YourHome />
      <HowItWork />
      <Simplify />
      <Testimonials />
      <Resources />
    </>
  );
}
