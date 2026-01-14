const anchor = require("@coral-xyz/anchor");

describe("kvault-poc", () => {
  const provider = anchor.AnchorProvider.local();
  anchor.setProvider(provider);

  const program = anchor.workspace.KvaultPoc;

  it("Initializes!", async () => {
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
