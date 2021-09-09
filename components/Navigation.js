import Link from 'next/link';

export const Navigation = props => {
  return (
    <nav className="col-span-1 bg-gray-800 min-h-screen flex flex-col items-center">
      <h1 className="font-bold text-4xl text-white mt-24 mb-8">Brad Ringel</h1>
      <Link href="/">
        <a className="font-semibold text-2xl text-white pb-2">About Me</a>
      </Link>
      <Link href="/projects">
        <a className="font-semibold text-2xl text-white pb-2">Projects</a>
      </Link>
      <Link href="/resume">
        <a className="font-semibold text-2xl text-white pb-2">Resumé</a>
      </Link>
    </nav>
  );
};
