const Footer = () => {
  const builtWithList = [
    { title: 'React', ref: 'https://react.dev/' },
    { title: 'Github API', ref: 'https://docs.github.com/en/rest/' },
    { title: 'TailwindCSS', ref: 'https://tailwindcss.com/' },
    { title: 'daisyUI', ref: 'https://daisyui.com/' },
  ];
  return (
    <footer className='footer footer-center p-6 wrapper text-base-content'>
      <aside>
        <p className='text-base'>
          Built with{' '}
          {builtWithList.map((item, idx) => (
            <span key={idx}>
              <a href={item.ref} className='text-primary hover:underline'>
                {item.title}
              </a>
              {builtWithList.length - 1 !== idx && <span> &#183; </span>}
            </span>
          ))}
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
