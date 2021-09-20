import * as Currency from './currency';
import * as KeyBackup from './keybackup';
import * as ElectrumClient from './BlueElectrum';
const dotenv = require('dotenv');

export { KeyBackup, ElectrumClient, Currency };
export * from './wallet';
export * from './model';

dotenv.config();

console.log(process.env.HD_MNEMONIC);
