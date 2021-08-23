import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';

const pathNameMap: { [key: string]: string } = {
  posts: 'ブログ',
};

interface Props {
  title: string;
}

export default function BreadCrumbs({ title }: Props) {
  const router = useRouter();
  const paths = router.pathname.split('/').filter((path) => path !== '');
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2 sm:space-x-4">
        <li>
          <div>
            <Link href="/">
              <a className="text-gray-400 hover:text-gray-500">
                <HomeIcon
                  className="flex-shrink-0 h-5 w-5"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </a>
            </Link>
          </div>
        </li>
        {paths.map((path, i) => (
          <li key={path}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-300"
                aria-hidden="true"
              />
              <Link href={'/' + paths.slice(0, i + 1).join('/')}>
                <a
                  className="ml-2 sm:ml-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-300"
                  aria-current={paths.length === i + 1 ? 'page' : undefined}
                >
                  {paths.length === i + 1
                    ? title.length > 15
                      ? title.substr(0, 15) + '...'
                      : title
                    : pathNameMap[path]}
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
