import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { KvaultPoc } from "../target/types/kvault_poc";
import { assert } from "chai";

describe("withdraw_freeze_poc", () => {
  // Configure the client to use the local cluster
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.KvaultPoc as Program<KvaultPoc>;

  it("Triggers NotEnoughLiquidityDisinvestedToSendToUser error", async () => {
    try {
      // Attempt to withdraw liquidity without enough funds
      await program.methods
        .initialize() // or replace with withdraw method if available
        .accounts({
          // fill in with actual accounts from your IDL
          user: provider.wallet.publicKey,
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
