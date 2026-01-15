import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { KvaultPoc } from "../target/types/kvault_poc";
import { assert } from "chai";

describe("withdraw_freeze_poc", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.KvaultPoc as Program<KvaultPoc>;

  it("Triggers NotEnoughLiquidityDisinvestedToSendToUser error", async () => {
    try {
      await program.methods
        .withdraw(new anchor.BN(1000))
        .accounts({
          user: provider.wallet.publicKey,
          vault: anchor.web3.PublicKey.findProgramAddressSync(
            [Buffer.from("vault")],
            program.programId
          )[0],
          pool: anchor.web3.PublicKey.findProgramAddressSync(
            [Buffer.from("pool")],
            program.programId
          )[0],
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();

      assert.fail("Expected NotEnoughLiquidityDisinvestedToSendToUser error");
    } catch (err: any) {
      console.log("Caught error:", err.error?.errorMessage || err.toString());
      assert.include(
        err.error?.errorMessage || err.toString(),
        "NotEnoughLiquidityDisinvestedToSendToUser",
        "Error should match expected PoC"
      );
    }
  });
});
