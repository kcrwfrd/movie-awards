import classNames from 'classnames';

import Ballot from './Components/Ballot/Ballot';

function App() {
  return (
    <div className="App bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300">
      <header className={classNames(
        'sticky top-0 w-full backdrop-blur',
        'bg-white dark:bg-slate-900/75',
        'border-b border-slate-700',
      )}>
        <div className="container mx-auto py-3">
          <h1 className="text-4xl md:text-6xl font-bold">Movie Awards 2022</h1>
        </div>
      </header>
      
      <Ballot />
    </div>
  );
}

export default App;
