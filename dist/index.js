import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import movieRoutes from './routes/movies.routes.js';
import seriesRoutes from './routes/series.routes.js';
import actorRoutes from './routes/actors.routes.js';
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/auth', authRoutes);
app.use('/movies', movieRoutes);
app.use('/series', seriesRoutes);
app.use('/actors', actorRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map