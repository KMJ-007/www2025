import ReadingsList from '@/components/ReadingsList';

type Article = {
  id: number;
  link: string;
  title: string;
};

type ApiResponse = {
  userSaved: Article[];
};

async function getReadings() {
  const response = await fetch('https://curius.app/api/users/1819/links?page=0', {
    next: { revalidate: 1800 },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }

  const data: ApiResponse = await response.json();
  return data.userSaved;
}

export default async function RecentReadings({ showAll = false }: { showAll?: boolean }) {
  const articles = await getReadings();
  const displayArticles = showAll ? articles : articles.slice(0, 10);

  return (
    <section className={showAll ? '' : 'sm:max-w-xl'}>
      {!showAll && (
        <h2 className="text-xl text-[#ededed70] mb-4">
           Recently Read...
        </h2>
      )}
      <ReadingsList 
        articles={displayArticles} 
        showMoreLink={!showAll} 
      />
    </section>
  );
} 