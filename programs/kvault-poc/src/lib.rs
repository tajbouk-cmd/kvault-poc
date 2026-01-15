use anchor_lang::prelude::*;

declare_id!("4HL9RfQX8p1xHaApJG2D1zVJ9ZGfDW9EkEwSQMmDE37M");


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

