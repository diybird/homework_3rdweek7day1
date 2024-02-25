export default function AllTodos(props) {
    const { lists1, lists2 } = props;
  
    return (
      <div>
        <div>
          {lists1.map((list1) => {
            return <div>{list1.text}</div>;
          })}
          <button className="mx-1 mt-2 bg-info text-white border-0">Rush</button>
          <button className="mx-1 mt-2 bg-info text-white border-0">Relax</button>
        </div>
  
        <div>
          {lists2.map((list2) => {
            return <div>{list2.text}</div>;
          })}
          <button className="mx-1 mt-2 bg-info text-white border-0">Rush</button>
          <button className="mx-1 mt-2 bg-info text-white border-0">Relax</button>
        </div>
      </div>
    );
  }
  