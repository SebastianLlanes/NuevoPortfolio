import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc, increment, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const counterRef = doc(db, 'portfolio', 'visitors');

    // Incrementa el contador una sola vez por sesión
    const alreadyCounted = sessionStorage.getItem('visited');
    if (!alreadyCounted) {
      getDoc(counterRef).then((snap) => {
        if (snap.exists()) {
          setDoc(counterRef, { count: increment(1) }, { merge: true });
        } else {
          setDoc(counterRef, { count: 1 });
        }
        sessionStorage.setItem('visited', 'true');
      });
    }

    // Escucha el contador en tiempo real
    const unsub = onSnapshot(counterRef, (snap) => {
      if (snap.exists()) {
        setCount(snap.data().count);
      }
    });

    return () => unsub();
  }, []);

  if (count === null) return null;

  return (
    <div className="visitor-counter">
      <span className="visitor-counter__dot" />
      <p className="visitor-counter__text">
        <span className="visitor-counter__number">{count}</span>
        {count === 1 ? ' persona vio este portfolio' : ' personas vieron este portfolio'}
      </p>
    </div>
  );
};

export default VisitorCounter;