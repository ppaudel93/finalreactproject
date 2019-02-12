import { connectToDB, findDocuments, insertOne } from "./generalFunctions";
const signupApi = (req, res) => {
  console.log("inside SignUp API");
  let data = req.body.data;
  console.log(data);
  connectToDB()
    .then(db =>
      findDocuments(db, data.email).then(docs => {
        console.log(docs);
        if (docs.length > 0 && docs[0] !== null) {
          console.log("The user already exists.");
          return res.send({ success: false });
        } else {
          connectToDB().then(db => {
            insertOne(db, data);
          });
          res.send({ success: true });
        }
      })
    )
    .catch(err => console.log(err));
};
export default signupApi;
