import { useState, useEffect } from "react"
import styles from "./instTable.module.css"

function UserList() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    fetch('https://mongoose-music-store.vercel.app/api/instruments')
      .then(response => response.json())
      .then(data => {
        setInstruments(data);
        console.log(data);
      });
  }, []);

  return (
    <tbody>
      {instruments.map(instrument => (
        <tr key={instrument.id}>
          <td>{instrument.name}</td>
          <td>${instrument.price}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default function InstTable() {
  const [count, setCount] = useState(0);

  return (
    <>
    <table className={styles['inst-table']}>
      <caption>Recently sold at Mongoose Music</caption>
      <thead>
        <tr>
          <th>Instrument</th>
          <th>Price</th>
        </tr>
      </thead>
        <UserList />
    </table>
    </>
  );
}