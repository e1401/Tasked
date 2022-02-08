import { projectFirestore } from '../firebase/config';
import { useEffect, useState } from 'react';

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection).doc(id);

    ref
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          setDocument(doc.data());
          setError(null);
        } else {
          console.log('No such document');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [collection, id]);

  return { document, error };
};
