import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/login">Login</Link>
      <Link href="/blog/first">First Blog</Link>
      <Link href="/product/1/review">Product</Link>
    </div>
  );
};

export default Home;
