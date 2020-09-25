import React, { useState } from 'react';
import { Form } from './Form';
import { WalkList } from './WalkList'

export function Logger() {

  const [walks, setWalks] = useState([]);

  const handleAdd = walk => {
    setWalks(prevWalks => {
        prevWalks.forEach(o => {
            if (o.date === walk.date) {
                walk.km = o.km + walk.km;
                prevWalks.splice(prevWalks.indexOf(o), 1);
            }
        });
        return( [...prevWalks, walk]);
    });
  }


  const removeWalk = date => {
    setWalks(prevWalks => prevWalks.filter(walk => walk.date !== date));
  }

  return(
        <>
         <Form onAdd={handleAdd} />
         <WalkList walks = {walks} removeWalk={removeWalk} />
        </>
  );
}
