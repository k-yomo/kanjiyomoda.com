import type { NextPage } from 'next';
import Image from 'next/image';
import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io';
import { IoMailOutline } from 'react-icons/io5';
import SEOMeta from '@src/components/SEOMeta';
import ProfileImage from '@public/images/common/profile.jpg';
import {
  EMAIL_ADDRESS,
  GITHUB_PROFILE_URL,
  TWITTER_PROFILE_URL,
} from '@src/config/constant';

const Home: NextPage = () => {
  return (
    <div className="my-8 sm:my-16">
      <SEOMeta
        title="k-yomo's Tech Blog"
        excludeSiteTitle
        description="k-yomoの技術ブログです。検索技術やGoなどを中心に雑多に書いていこうと思います。"
        img={{ srcPath: ProfileImage.src }}
      />
      <div className="flex flex-col sm:flex-row items-center justify-center mx-auto mb-4 sm:space-x-4 space-y-2">
        <div className="w-24 h-24">
          <Image
            src={ProfileImage}
            alt="プロフィール画像"
            placeholder="blur"
            width={333}
            height={333}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl text-center sm:text-left">
            Kanji Yomoda / k-yomo
          </h2>
          <p>Software Engineer at Mercari, Inc.</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <a
          href={TWITTER_PROFILE_URL}
          className="text-black dark:text-white hover:text-primary-500 dark:hover:text-primary-500"
        >
          <IoLogoGithub size={32} />
        </a>
        <a
          href={GITHUB_PROFILE_URL}
          className="text-black dark:text-white hover:text-primary-500 dark:hover:text-primary-500"
        >
          <IoLogoTwitter size={32} />
        </a>
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          className="text-black dark:text-white hover:text-primary-500 dark:hover:text-primary-500"
        >
          <IoMailOutline size={32} />
        </a>
      </div>
    </div>
  );
};

export default Home;
