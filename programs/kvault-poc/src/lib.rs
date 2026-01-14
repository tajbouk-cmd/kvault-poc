use anchor_lang::prelude::*;

declare_id!("KVault111111111111111111111111111111111");

#[program]
pub mod kvault_poc {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("KVault PoC initialized!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
