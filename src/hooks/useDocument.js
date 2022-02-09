import { projectFirestore } from '../firebase/config';
import { useEffect, useState } from 'react';

// export const useDocument = (collection, id) => {
//   const [document, setDocument] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let ref = projectFirestore.collection(collection).doc(id);

//     ref
//       .get()
//       .then((doc) => {
//         if (doc.exists) {
//           console.log(doc.data());
//           setDocument(doc.data());
//           setError(null);
//         } else {
//           console.log('No such document');
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [collection, id]);

//   return { document, error };
// };

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  //realtime data for the document
  useEffect(() => {
    //first, get a reference to the document
    const ref = projectFirestore.collection(collection).doc(id);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        setDocument({ ...snapshot.data(), id: snapshot.id });
        setError(null);
      },
      (error) => {
        console.log(error.message);
        setError('Unable to reach document');
      }
    );

    //unsubscribe function from real-time listener
    return () => {
      unsubscribe();
    };
  }, [collection, id]);
  return { document, error };
};
