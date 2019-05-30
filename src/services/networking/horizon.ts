import * as StellarSdk from 'stellar-sdk';
import { Config } from 'stellar-sdk';
const fetch = require('node-fetch');

Config.setAllowHttp(true);
StellarSdk.Network.useTestNetwork();
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

// GBBORXCY3PQRRDLJ7G7DWHQBXPCJVFGJ4RGMJQVAX6ORAUH6RWSPP6FM

// GDMG7MUHGVWCBYOFX6II4SVNAY5YLUWJQTG2AJO5QIPTVKI3GWYUJN43
// SC4NZUVUDTAPRR2PFXSYC7A2IRKRQZJVYATJTG7ODLDMNNIPPXSIQHUO

export default class Horizon {
  readonly pubKey: any;
  readonly secret: any;

  constructor() {
    this.pubKey = 'GDKJL6IRL2OI7XZ4ZBY7EP63XUSVUESXD5DMQDA6VMUQ6L6CPB6M5E6K';
    this.secret = 'SBSZU2PSUJHWQN7D5YYROVNPUU54LRBHQLXAKEOHKKOED6GW2H3X5MGO';
  }

  // createTestAccount = async () => {
  //   let account = StellarSdk.Keypair.random();
  //   let pubKey = account.publicKey();
  //   let secret = account.secret();
  //   console.log(pubKey);
  //   console.log(secret);
  //
  //   try {
  //     const response = await fetch(
  //       `https://friendbot.stellar.org?addr=${encodeURIComponent(pubKey)}`
  //     );
  //     const responseJSON = await response.json();
  //     console.log('SUCCESS! You have a new account :)\n', responseJSON);
  //   } catch (e) {
  //     console.error('ERROR!', e);
  //   }
  // }

  balances = async () => {
    let account = await server.loadAccount(this.pubKey);
    account.balances.forEach(balance => {
      console.log(balance);
    });
  }

  buildTransaction = (amount: number, description: string, to: string) => {
    let sourceKeys = StellarSdk.Keypair.fromSecret(this.secret);

    server
      .loadAccount(to)
      .catch(error => {
        throw new Error('The destination account does not exist!');
      })
      .then(() => {
        return server.loadAccount(this.pubKey);
      })
      .then(sourceAccount => {
        let transaction = new StellarSdk.TransactionBuilder(sourceAccount, { fee: 100 })
          .addOperation(
            StellarSdk.Operation.payment({
              destination: to,
              asset: StellarSdk.Asset.native(),
              amount: '10'
            })
          )
          .addMemo(StellarSdk.Memo.text('Test Transaction'))
          .setTimeout(180)
          .build();

        transaction.sign(sourceKeys);

        return server.submitTransaction(transaction);
      })
      .then(result => {
        console.log('Success! Results:', result);
      })
      .catch(error => {
        console.error('Something went wrong!', error);
      });
  }

  transactionList = () => {
    server
      .transactions()
      .forAccount(this.pubKey)
      .order('desc')
      .limit(200)
      .call()
      .then(page => {
        console.log('Page 1: ');
        console.log(page.records);
        return page.next();
      })
      .catch(err => {
        console.log(err);
      });
  }

  payments = () => {
    server
      .payments()
      .forAccount(this.pubKey)
      .order('desc')
      .limit(10)
      .call()
      .then(({ records }) => {
        console.log(records);
        return records;
      });
  }
}
