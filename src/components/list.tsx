interface Props {
  listClassName?: string;
  itemsClassName?: string;
  items: Array<{ bold?: string; content: string }>;
}
export default function List({ listClassName, itemsClassName, items }: Props) {
  return (
    <ul className={listClassName}>
      {items.map((item) => {
        return (
          <li className={itemsClassName} key={item.content}>
            {item.bold && <strong>{item.bold} </strong>}
            {item.content}
          </li>
        );
      })}
    </ul>
  );
}
