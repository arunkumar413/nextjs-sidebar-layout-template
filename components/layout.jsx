import Link from 'next/link';

export function Layout(props) {
  let pageItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
  ];

  const sidebarElements = pageItems.map(function (item, index) {
    return (
      <Link key={item.name} href={item.path}>
        {item.name}
      </Link>
    );
  });

  return (
    <>
      <header>
        <h4> This is header </h4>
      </header>

      <main>{props.children}</main>

      <aside>{sidebarElements}</aside>

      <footer></footer>
    </>
  );
}
