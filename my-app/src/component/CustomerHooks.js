/*
 * @Author: TerryMin
 * @Date: 2021-03-04 17:09:19
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-05 15:27:15
 * @Description: file not
 */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const usePerson = personId => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then(res => res.json())
      .then(data => {
        setPerson(data);
        setLoading(false);
      }).catch(()=>{
        setPerson({
          name:'TerryMin',
          height:'172cm',
          width:'65kg'
        });
        setLoading(false);
      })
  }, [personId]);
  return [loading, person];
}

const Person = ({ personId }) => {
  const [loading, person] = usePerson(personId);

  if (loading === true) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>You're viewing:{person.name}</p>
      <p>Height:{person.height}</p>
      <p>width:{person.width}</p>
    </>
  )
}

function CustomerHooks () {
  const [show, setShow] = useState('1');
  return (
    <div className="App">
      <Person personId={show}></Person>
      <div>
        Show:
        <button onClick={() => { setShow('1') }}>Luke</button>
        <button onClick={() => { setShow('2') }}>C-3PO</button>
      </div>
    </div>
  )
}

export default CustomerHooks;
