const bip39 = require('bip39')
const readline = require('readline')

main();

async function main(){
    const mnemonic = bip39.generateMnemonic();
    const mnemonic_arr = mnemonic.split(" ")

    const half = Math.ceil(mnemonic_arr.length/2);
    const firstHalf = mnemonic_arr.slice(0, half);
    const secondHalf = mnemonic_arr.slice(half);
    await askQuestion("Are you ready to start?");
    process.stdout.write('\033c');

    console.log(`
    1st Half of Mnemonic: 
    =================================================================
    ${firstHalf}
    =================================================================
    `)

    await askQuestion("Are you ready to hand over to Observer?")
    process.stdout.write('\033c');

    await askQuestion("Are you ready to take over from Observer?");
    process.stdout.write('\033c');
    console.log()
    console.log(`
    2nd Half of Mnemonic: 
    =================================================================
    ${secondHalf}
    =================================================================
    `)
}

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}