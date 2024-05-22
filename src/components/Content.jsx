import { ItemList } from './ItemList';

export const Content = ({ items, handleCheck, handleDelete}) => {

  return (
    <main>
      <ItemList 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </main>
  )
}
