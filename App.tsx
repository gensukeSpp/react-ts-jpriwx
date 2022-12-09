import * as React from 'react';
import './style.css';
type Prop = {
  content: string;
  link: string;
};
const Component = () => {
  const fetchData = fetch(
    'http://my-json-server.typicode.com/gensukeSpp/sweets_fake/topics'
  ).then((res) => res.json());

  // const sample = {
  //   content: "もちもち",
  //   num: 1
  // }
  const [val, setVal] = React.useState<Prop[]>([]);

  React.useEffect(() => {
    const f = async () => {
      const json = await fetchData;
      setVal(json);
    }
    f();
  }, []);
  console.log(val);

  return (
    <ul>
    {
        (val.map((val, i) => {
            return (
              <>
                    <li>2022.12.5</li>
                    <li><a href={`./${val.link}`}>{val.content}</a></li>
              </>
            )
        }))
    }
    </ul>
  )
}
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Component />
    </div>
  );
}
