import { useState, useEffect } from "react";
import { db, collection, onSnapshot } from "../../firebase_config.js";


const Display = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
      const querySnapshot = onSnapshot(collection(db, "submissions"),(snapshot)=>
        {setSubmissions(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))})

    return ()=>querySnapshot()
  }, []);

  return (
    <div className="displayContainer">
      <table>
        <thead>
        <tr>
            <th>Client Name</th>
            <th>Client question</th>
        </tr>
        </thead>
        <tbody>
        {submissions.map((submission) => (
          <tr key={submission.id}>
            <td>{submission.name}</td><td>{submission.question}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
