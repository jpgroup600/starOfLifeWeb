import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  const { companyName, name, email, phone,question } = JSON.parse(req.body)

  try {
    const data = {
      companyName,
      name,
      email,
      phone,
      question,
      createdAt: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
    }

    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI as string)
    const db = client.db()
    const collection = db.collection('leads')

    // Insert the data
    const result = await collection.insertOne(data)
    console.log('Inserted data:', data)

    // Close the connection
    await client.close()

    console.log(result);
    // Send success response

    if (result.insertedId) {

      fetch('https://hook.eu2.make.com/qhe1rm42utunh3htatvjfnahogxiw2km', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      res.status(200).json({
        success: true,
        message: 'Lead successfully added',
        data: result
      })
    }

  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to add lead to database'
    })
  }
} 