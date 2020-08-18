import mongoose from "mongoose";
import colors from "colors";

const dbConnection = async () => {

    try {
        //useCreateIndex required
        await mongoose.connect(process.env.DB_CNN!,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            }
        );
        console.log(colors.green(`DB ONLINE`))
    } catch (error) {
        console.log(error)
        throw new Error('DB Connection not iniatilize')
    }

}

export {
    dbConnection
}
