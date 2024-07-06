// app.mjs
// Copyright (c) 2024 Ishan Pranav
// Licensed under the MIT license.

import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const port = process.env.PORT || 3001;
const rootDirectory = dirname(fileURLToPath(import.meta.url));
const bootstrapDirectory = join(rootDirectory, '../node_modules/bootstrap/dist/');
const publicDirectory = join(rootDirectory, 'public');

express()
    .use(express.static(publicDirectory))
    .use(express.static(bootstrapDirectory))
    .set('view engine', 'hbs')
    .get('/', (request, response) => {
        response.locals.googleAdsenseAccount = process.env.GOOGLE_ADSENSE_ACCOUNT;
        response.locals.todayStatus = 'active';

        response.render('home');
    })
    .get('/archive', (request, response) => {
        response.locals.archiveStatus = 'active';

        response.render('archive');
    })
    .listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
