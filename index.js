const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://demouser:Hejsan123@cluster0.omzqfhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    
    const coll = await client.db("NodeJSTest").collection("Product")
    // coll == ungefär table 
    await coll.insertOne({
        name:"Seagate Hårddisk ABC",
        size:"100gb",
        price:123,
        category:"Hårddisk"
    })

    await coll.insertOne({
        name:"Skärm ABC",
        resolution:"4k",
        price:200,
        category: "Skärm"
    })


    console.log("Pinged your deployment. You successfully connected to MongoDB!");






  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);