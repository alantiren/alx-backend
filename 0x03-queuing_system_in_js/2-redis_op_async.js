#!/usr/bin/yarn dev
import { createClient } from 'redis';
import { promisify } from 'util';

const client = createClient();

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, (err, reply) => {
    if (err) {
      console.error('Error setting value:', err);
      return;
    }
    console.log(`Setting ${schoolName} to ${value}:`, reply);
  });
};

const displaySchoolValue = async (schoolName) => {
  const getAsync = promisify(client.get).bind(client);
  try {
    const reply = await getAsync(schoolName);
    console.log(reply);
  } catch (error) {
    console.error('Error getting value:', error);
  }
};

(async () => {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
})();
