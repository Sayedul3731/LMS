import chalk from 'chalk';
import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(chalk.green.bold(`✓ Server running on port ${PORT}`));
});
