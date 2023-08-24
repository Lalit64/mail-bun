import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import send from './send';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/send', send);

export default router;
