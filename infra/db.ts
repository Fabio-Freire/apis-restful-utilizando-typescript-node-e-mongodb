import * as mongoose from 'mongoose';

class DataBase {
    private Db_URL = 'mongodb://localhost:27017/db_portal'

    createConnection(){
        mongoose.connect(this.Db_URL);
    }
}

export default DataBase;