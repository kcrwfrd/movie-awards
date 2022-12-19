import classNames from 'classnames';

import Ballot from './Components/Ballot/Ballot';

function App() {
  return (
    <div className='App text-slate-300 bg-[#0D2436]'>
      <header className={classNames(
        'sticky top-0 w-full backdrop-blur z-40',
        'border-b border-gray-700',
        'bg-gray-900/75',
      )}>
        <div className="container mx-auto py-3 px-2">
          <h1 className="text-4xl md:text-6xl font-bold">Movie Awards 2022</h1>
        </div>
      </header>
      
      <Ballot />
    </div>
  );
}

export default App;
