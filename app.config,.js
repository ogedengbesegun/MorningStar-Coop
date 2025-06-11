import 'dotenv/config';

export default {
    expo: {
        name: "morningstar-coop",
        slug: "MorningStar-Coop",
        version: "1.0.0",
        extra: {
            // API_URL: process.env.local.API_URL,
            MONGO_db2: process.env.MONGO_db2
        },
    },
};
