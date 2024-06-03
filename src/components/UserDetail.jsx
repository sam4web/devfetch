import { LuGlobe } from 'react-icons/lu';
import { IoMdPin } from 'react-icons/io';
import { BsBuildings } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import useUserStore from '@/store';

const UserDetail = () => {
  const user = useUserStore((state) => state.user);
  const formatDate = (date) => {
    return new Date(date).toLocaleString('default', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section className='wrapper size-full'>
      <div className='wrapper-spacing space-y-4 flex h-full flex-col justify-between'>
        <div className='space-y-6'>
          <div className='space-y-4'>
            <div className='flex justify-between md:items-center flex-col md:flex-row'>
              <h2 className='text-2xl font-semibold'>{user.name}</h2>
              <p className='text-lg font-medium'>
                Joined {formatDate(user.created_at)}
              </p>
            </div>
            {user?.bio ? (
              <p>{user.bio}</p>
            ) : (
              <p className='text-lg font-medium'>This profile has no bio.</p>
            )}
          </div>

          <div className='flex gap-3 flex-wrap'>
            {user.public_repos ? (
              <div className='user-stats'>
                <h4>{user.public_repos}</h4>
                <p>repositories</p>
              </div>
            ) : (
              ''
            )}
            {user.followers ? (
              <div className='user-stats'>
                <h4>{user.followers}</h4>
                <p>followers</p>
              </div>
            ) : (
              ''
            )}
            {user.following ? (
              <div className='user-stats'>
                <h4>{user.following}</h4>
                <p>following</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-3.5'>
          {user.blog ? (
            <div className='social-item'>
              <LuGlobe />
              <a href={`https://${user.blog}`} target='_blank'>
                {user.blog}
              </a>
            </div>
          ) : (
            ''
          )}

          {user.company ? (
            <div className='social-item'>
              <BsBuildings />
              <p>{user.company}</p>
            </div>
          ) : (
            ''
          )}

          {user.location ? (
            <div className='social-item'>
              <IoMdPin />
              <p>{user.location}</p>
            </div>
          ) : (
            ''
          )}

          {user.email ? (
            <div className='social-item'>
              <MdOutlineMailOutline />
              <a href={`mailto:${user.email}`} target='_blank'>
                {user.email}
              </a>
            </div>
          ) : (
            ''
          )}

          {user.twitter_username ? (
            <div className='social-item'>
              <FaXTwitter />
              <a
                href={`https://x.com/${user.twitter_username}`}
                target='_blank'
              >
                {user.twitter_username}
              </a>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
};

export default UserDetail;
