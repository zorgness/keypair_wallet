// For Testing
// public_key(wallet address): "EXExqvJ7Yqx2Y4wp4cUNEvrgMVw7AagBERorgd9UcKsP"
// coded_keypair = [60,210,27,159,171,246,140,105,202,190,203,237,165,7,117,236,89,209,31,63,183,62,38,38,186,112,123,225,34,196,246,120,200,231,36,98,47,91,113,223,239,177,218,154,68,240,75,142,133,156,151,243,252,71,201,130,188,5,5,217,86,236,88,154]
// encoded_keypair = "2DXdScLyK1Mf9Vbi79raGE7ztv3CLqJeGcmEesMa849kprAB9Meaqswg84tmfz1ru1uqxFXH5ftmt8RvEauMZv8H"


const bs58 = require('bs58')
const prompt = require('prompt');

prompt.start();

prompt.get(["key_pair"], function (err, result) {
if (err) {
    return onErr(err);
  }
  console.log('Command-line input received:');
  console.log('  Encoded_Key_pair: ' + result.key_pair);

  let coded = codedKeypairToArray(result.key_pair);
  
  let public_ = findpublicKeyWithCodedKeypair(coded);

  let encoded = encodedKeypairToBase58(coded);
  let confirm;
  encoded == result.key_pair ? confirm = true : confirm = false;

  console.log("  public_key: ", public_);
  console.log("  coded_keypair: ", coded);
  console.log("coded_keypair confirmation: ", confirm);
  
});

function onErr(err) {
    console.log(err);
    return 1;
}

// find array coded_keypair

function codedKeypairToArray(enc_keypair) {
    let arr = [];
    arr.push(...bs58.decode(enc_keypair))
    return arr;
}

// find encoded_keypair

function encodedKeypairToBase58(cod_keypair) {
    return bs58.encode(cod_keypair);
}

// find public key with coded_keypair

function findpublicKeyWithCodedKeypair(cod_keypair) {
    return bs58.encode(cod_keypair.slice(32, 64));
}



















