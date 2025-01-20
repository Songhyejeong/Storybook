import './global.css';
import TagList from './components/TagList';

function App() {
  return (
    <div className="w-screen h-screen bg-primary">
      <TagList
        tagList={['All', 'React', 'TypeScript']}
        onTagClick={console.log}
      />
    </div>
  );
}

export default App;
