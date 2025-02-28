const circomlibjs = require("circomlibjs");

async function testPoseidon() {
    const poseidon = await circomlibjs.buildPoseidon();

    const input = [1, 2];
    const hash = poseidon(input);
    const hashHex = poseidon.F.toString(hash);

    console.log("Poseidon hash:", hashHex);

}

testPoseidon()
    .then(() => console.log("✅ Poseidon works!"))
    .catch((err) => console.error("❌ Error:", err));
