import { connectToDB, findDocuments } from "./generalFunctions";
import bcrypt from "bcrypt-nodejs";

const loginApi = (req, res) => {
  console.log("inside login API");
  let data = req.body.data;
  console.log(data);
  connectToDB()
    .then(db =>
      findDocuments(db, data.email).then(docs => {
        console.log(docs);
        if (docs.length > 0 && docs[0] !== null) {
          const requiredDoc = docs[0];
          console.log(bcrypt.hashSync(data.password));
          console.log(bcrypt.compareSync(data.password, requiredDoc.password));
          if (bcrypt.compareSync(data.password, requiredDoc.password)) {
            return res.send({ success: true, data: docs[0].email });
          } else {
            return res.send({ success: false });
          }
        } else {
          return res.send({ success: true, data: docs[0].email });
        }
      })
    )
    .catch(err => console.log(err));
};
export default loginApi;
