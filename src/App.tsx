import { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';
export interface IState {
  people: {
    name: string
    imageUrl: string
    age: number
    notes?: string
  }[]
}

const App = () => {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Sam Welson",
      imageUrl: "https://lh3.googleusercontent.com/ogw/ADea4I65aITd-TBudY1QBSHV_o0S-Ca1INi3Oll7ozsxeA=s83-c-mo",
      age: 34,
      notes: "Interested on typescript"
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
