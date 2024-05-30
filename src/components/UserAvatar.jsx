const UserAvatar = ({ user }) => {
  return (
    <section className='wrapper size-full'>
      <div className='wrapper-spacing flex flex-col items-center justify-between space-y-2'>
        <img
          src={user.avatar_url}
          alt={`${user.login} avatar`}
          className='sm:w-1/2 md:w-10/12 rounded-lg shadow-md'
        />
        <a href={user.html_url} target='_blank'>
          <h3 className='text-xl font-medium hover:underline text-primary'>
            @{user.login}
          </h3>
        </a>
      </div>
    </section>
  );
};

export default UserAvatar;