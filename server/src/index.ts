import crypto from 'node:crypto';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { characters, cities } from './mock-data';

let db = {
  characters,
  cities,
};

const app = new Hono();
app.use(logger());
app.use('/*', serveStatic({ root: './public' }));

app.use('/api/*', cors());

app.get('/api/characters', async (context) => {
  return context.json(db.characters);
});

app.post('/api/characters', async (context) => {
  const character = await context.req.json();
  db.characters = [
    ...db.characters,
    {
      ...character,
      id: crypto.randomUUID(),
      thumbNailUrl: '/thumbnails/new-character.jpg',
    },
  ];
  return context.body(null, 204);
});

app.get('/api/cities', (context) => {
  return context.json(db.cities);
});

app.get('/api/characters/:id', (context) => {
  return context.json(db.characters.find((c) => c.id === context.req.param('id')));
});

app.put('/api/characters/:id', async (context) => {
  const id = context.req.param('id');
  const character = await context.req.json();
  db.characters = db.characters.map((h) => (h.id === id ? { ...h, ...character } : h));
  return context.body(null, 204);
});

app.delete('/api/characters/:id', async (context) => {
  const id = context.req.param('id');
  db.characters = db.characters.filter((h) => h.id !== id);
  return context.body(null, 204);
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`API running on ${info.port}`);
});
