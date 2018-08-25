const PG_URL = process.env.PG_URL || 'postgresql://postgres:password@postgres:5432/postgres';

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const connectToPostgres = async (
  connectionString = PG_URL,
  attempts = 30,
  interval = 1000,
) => {
  if (attempts === 0) throw new Error('Failed to connect');
  try {
    const client = new Client({ connectionString });
    await client.connect();
    return client;
  } catch (e) {
    await sleep(interval);
    return connect(connectionString, attempts - 1, interval);
  }
};

module.exports = connectToPostgres;
