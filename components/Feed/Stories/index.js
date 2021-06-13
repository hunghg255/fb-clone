import StoryCard from './StoryCard';

const stories = [
  {
    id: 1,
    name: 'Person 1',
    src: 'https://links.papareact.com/l4v',
    profile: 'https://links.papareact.com/l4v',
  },
  {
    id: 2,
    name: 'Person 2',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    id: 3,
    name: 'Person 3',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p',
  },
  {
    id: 4,
    name: 'Person 4',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
  {
    id: 5,
    name: 'Person 5',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy',
  },
];

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((story) => {
        return (
          <StoryCard
            key={story.id}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        );
      })}
    </div>
  );
}

export default Stories;
