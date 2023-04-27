import Link from 'next/link';

export function Layout(props) {
  let pageItems = ['/home', '/about', '/contact'];

  const sidebarElements = pageItems.map(function (item, index) {
    return <Link href={item}>{item}</Link>;
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
