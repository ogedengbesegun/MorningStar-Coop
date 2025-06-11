// import cors from 'cors';
// // import Constants from 'expo-constants';
// import 'dotenv/config';
// import express from 'express';
// import { MongoClient } from 'mongodb';


// // const MONGO_db2 = Constants.expoConfig?.extra?.MONGO_db2;
// const app = express()
// const PORT = 8081
// // Initialize Express app
// app.use(express.json());
// app.use(cors());
// const client = new MongoClient(process.env.MONGO_DB_URI)

// client.connect().then(() => {
//     const db = client.db('morningStar');
//     const yr25 = db.collection('2025');
//     const userslog = db.collection('userslog');
//     /////////////////
//     app.post('/api/signup', async (req, res) => {
//         // Implement your logic here
//         const {
//             fullname,
//             oracleNum,
//             pword,
//             cpword
//         } = req.body;
//         const signup = await userslog.insertOne({
//             full_name: fullname, oracle: oracleNum,
//             password: pword
//         });
//         res.json(signup);
//         // res.send('Users endpoint');
//     });


//     // Start the server
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });
// }).catch((error) => { console.log(`error connecting Mongodb, ${error}`) });

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { MongoClient } from 'mongodb';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8082;
const client = new MongoClient(process.env.MONGO_DB_URI);

// async function startServer() {
//   try {
await client.connect().then(() => {
  console.log('✅ Connected to MongoDB');

  const db = client.db(process.env.DB_MsCoop);
  const userslog = db.collection('userslog');
  const msc_2024 = db.collection('msc_2024');
  const msc_2025 = db.collection('msc_2025');
  const msc_2026 = db.collection('msc_2026');
  const msc_2027 = db.collection('msc_2027');
  const msc_2028 = db.collection('msc_2028');
  const msc_2029 = db.collection('msc_2029');
  const msc_2030 = db.collection('msc_2030');
  app.post('/api/signup', async (req, res) => {
    const { fullname, oracleNum, pword, cpword } = req.body;

    if (fullname === '' || oracleNum === '' || pword === '') {
      return res.status(404).json({ success: false, message: 'Please fill in all fields' });
    }

    if (pword.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least Min 6 and Max 15 characters long' })
    };

    if (pword !== cpword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match, Please check and try again' })
    };



    const checkOracle = await userslog.findOne({ oracle: oracleNum });
    // const findfullname=await userslog.findOne({})
    if (checkOracle) {
      return res.status(400).json({ success: false, message: `A member with the Oracle Number already exist. Please check and try again` })
    }
    ///
    const signup = await userslog.insertOne({
      full_name: fullname,
      oracle: oracleNum,
      password: pword,
    });

    res.status(201).json({ success: true, message: `${fullname} with Oracle Num ${oracleNum} is Registered Successfully`, id: signup.insertedId });
  });


  app.post('/api/login', async (req, res) => {
    const { oracle, pword } = req.body;
    const krtlogin = await userslog.findOne({ oracle: oracle, password: pword })
    if (oracle === '' || pword === '') {
      return res.status(404).json({ success: false, message: 'Please fill in all fields' });
    }
    if (!krtlogin) {
      return res.status(400).json({ success: false, message: `Login Details incorrect, Check and try again` })

    }
    res.status(200).json({
      success: true,
      message: `${krtlogin.full_name.split(" ")[1]} Welcome to MorningStar Cooperative Society `
      , user: {
        id: krtlogin._id,
        full_name: krtlogin.full_name,
        oracle: krtlogin.oracle,
      }
    })

  })

  app.post('/api/msc_finance', async (req, res) => {
const{month,oracle} = req.body;
    if (month === '' || oracle === '') {
      return res.status(404).json({ success: false, message: 'XXXX' });
    }

    const checkOracle = await msc_2024.findOne({ oracle: oracle ,month: month});
    if (!checkOracle) {
      return res.status(400).json({ success: false, message: `No reords yet` })
    }

    
    res.status(201).json({ success: true, acct:{
      savings: checkOracle.savings,
      loan: checkOracle.loan,
      retirement: checkOracle.retirement,
    }});

   })




  app.listen(PORT, () => {
    console.log(`🚀 Server running at ${PORT}`);
  });
}).catch((err) => {
  console.error('❌ Server error:', err);
})


// startServer();
