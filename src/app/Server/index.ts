import app from "./server";
import { MongoClient } from "mongodb";
import EnquiryDAO from "./dao/enquiryDAO"

const port = process.env.PORT || 8000

/**
Ticket: Connection Pooling

Please change the configuration of the MongoClient object by setting the
maximum connection pool size to 50 active connections.
*/

/**
Ticket: Timeouts

Please prevent the program from waiting indefinitely by setting the write
concern timeout limit to 2500 milliseconds.
*/
const dburl = 'mongodb+srv://coFounderBonga:12345@cluster0.kkaq0.azure.mongodb.net/PotentialClientDb?retryWrites=true&w=majority';
MongoClient.connect(
    dburl,
    // TODO: Connection Pooling
    // Set the poolSize to 50 connections.
    // TODO: Timeouts
    // Set the write timeout limit to 2500 milliseconds.
    { useNewUrlParser: true },
  )
    .catch(err => {
      console.error(err.stack)
      process.exit(1)
    })
    .then(async client => {
      await EnquiryDAO.injectDB(client)
      //await UsersDAO.injectDB(client)
      //await CommentsDAO.injectDB(client)
      app.listen(port, () => {
        console.log(`listening on port ${port}`)
      })
    })
  