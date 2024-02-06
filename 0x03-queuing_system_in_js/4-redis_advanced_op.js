#!/usr/bin/yarn dev
import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
  createHash();
});

function createHash() {
  client.hset('HolbertonSchools', 'Portland', 50, redisPrint);
  client.hset('HolbertonSchools', 'Seattle', 80, redisPrint);
  client.hset('HolbertonSchools', 'New York', 20, redisPrint);
  client.hset('HolbertonSchools', 'Bogota', 20, redisPrint);
  client.hset('HolbertonSchools', 'Cali', 40, redisPrint);
  client.hset('HolbertonSchools', 'Paris', 2, redisPrint);
  displayHash();
}

function displayHash() {
  client.hgetall('HolbertonSchools', (err, reply) => {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log(reply);
    }
    client.quit();
  });
}

function redisPrint(err, reply) {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Reply:', reply);
  }
}
