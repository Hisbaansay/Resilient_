/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />
import { useState } from 'react';
import { db } from '../content-script/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Papa from 'papaparse'
import checkApp from '../content-script/src/App';

interface Tweet {
  // For example:
  tweetText: string;
  discategory: string;
  category: string;
  infostatus: string;
  response: string;
  // Add more fields as per your actual data
  
}

function App() {
  const [csvData, setCsvData] = useState<Tweet[] | null>(null);


  const convertToCSV = (data: Tweet[]) => {
    const header = Object.keys(data[0]).join(',');
    const rows = data.map(obj => Object.values(obj).join(','));
    return [header, ...rows].join('\n');
  }
  // const exportToCSV = async () => {
  //   try {
  //     // Assuming 'tweets' is your Firestore collection
  //     const tweetsRef = collection(db, 'tweets');
  //     const tweetsSnapshot = await getDocs(tweetsRef);
  
  //     if (!tweetsSnapshot.empty) {
  //       const data: Tweet[] = [];
  //       tweetsSnapshot.forEach((doc) => {
  //         data.push(doc.data() as Tweet);
  //       });
  
  //       // Convert data to JSON and log it to the console
      
        
  //       // Convert data to CSV format
  //       const exportData = async () => {
  //         const parsedData = Papa.unparse(data, {
  //           delimiter: ",",
  //           header: true,
  //         })
      
  //         const blob = new Blob([parsedData], { type: "text/csv;charset=utf-8;" })
  //         const url = URL.createObjectURL(blob)
  //         const downloadLink = document.createElement("a")
  //         downloadLink.href = url
  //         downloadLink.setAttribute("download", "exported-data.csv")
  //         document.body.appendChild(downloadLink)
  //         downloadLink.click()
  //         document.body.removeChild(downloadLink),
  //       }
  //   } else {
  //     console.log('No tweets found.');
  //   }
  // } catch (error) {
  //   console.error('Error exporting to CSV:', error);


  // }
  
  // }

  
  const exportToCSV = async () => {
    try {
      const tweetsRef = collection(db, 'tweets');
      const tweetsSnapshot = await getDocs(tweetsRef);
  
      if (!tweetsSnapshot.empty) {
        const data: Tweet[] = [];
        tweetsSnapshot.forEach((doc) => {
          data.push(doc.data() as Tweet);
        });
  
        // Convert data to CSV format
        const parsedData = Papa.unparse(data, {
          delimiter: ",",
          header: true,
        });
  
        const blob = new Blob([parsedData], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.setAttribute("download", "exported-data.csv");
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink); // Removed the extra comma here
      } else {
        console.log('No tweets found.');
      }
    } catch (error) {
      console.error('Error exporting to CSV:', error);
    }
  };
  


  return (
    <div>
      <h1>Fact-Check the Internet With</h1>
      <h2>
        Inisght is a real-time fact-checking tool powered by AI that runs in the
        background of your Twitter feed. Resilient can fact-check tweets in
        real-time using the ChatGPT API.
      </h2>
      <div>
        <button onClick={exportToCSV}>Export to CSV</button>
      </div>
    </div>
  );
}

export default App;


