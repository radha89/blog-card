import ArrowIcon from '../../assets/arrowIcon.svg';
import { useGetBlogContent } from '../../hooks/useGetBlogContent';
import { BlogCardSkeleton } from './BlogCardSkeleton';

export function BlogCard() {
  const { isLoading, data } = useGetBlogContent();

  console.log(isLoading);

  if (isLoading) return <BlogCardSkeleton />;

  // TODO: here we would return a loading state
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  return (
    <>
      {data &&
        data.map((item: any) => (
          <div
            key={item.id}
            className="w-[340px] mt-[120px] rounded-lg bg-white shadow-[3px_3px_1px_rgba(0,0,0,0.03)]"
          >
            <div
              style={{ backgroundImage: `url(${item.bgImage})` }}
              className="w-full h-[288px] bg-cover rounded-t-lg"
            />
            <div className="w-[308px] flex flex-col mx-auto gap-3">
              <div className="flex items-center justify-center w-[67px] h-[24px] bg-green-50 text-green-700 border border-green-200 rounded-[20px] text-sm leading-5 mt-7">
                {item.tags.map((tag: string) => tag)}
              </div>
              <h1 className="w-[308px] h-[28px] text-lg leading-7 m-0 font-bold">
                {item.title}
              </h1>
              <p className="w-[308px] h-12 text-base leading-6 m-0">
                {item.description}
              </p>
              <a
                className="flex gap-2 font-medium text-base leading-6 mt-2 mb-6 text-indigo-500 hover:text-indigo-800"
                href={item.link}
                target="_blank"
              >
                Read more
                <img src={ArrowIcon} alt="arrow right icon" />
              </a>
            </div>
          </div>
        ))}
    </>
  );
}
