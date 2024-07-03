// app.mjs
// Copyright (c) 2024 Ishan Pranav
// Licensed under the MIT license.

import express from 'express';

const port = process.env.PORT || 3001;

express()
    .get('/', (request, response) => {
        response.json('{}');
    })
    .listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
