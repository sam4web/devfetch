const Footer = () => {
  return (
    <footer className='footer footer-center p-6 wrapper text-base-content'>
      <aside>
        <p>
          Built with{' '}
          <a href='https://react.dev/' target='_blank'>
            React
          </a>{' '}
          &#183;{' '}
          <a href='https://docs.github.com/en/rest/' target='_blank'>
            Github API
          </a>{' '}
          &#183;{' '}
          <a href='https://tailwindcss.com/' target='_blank'>
            TailwindCSS
          </a>{' '}
          &#183;{' '}
          <a href='https://daisyui.com/' target='_blank'>
            daisyUI
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
