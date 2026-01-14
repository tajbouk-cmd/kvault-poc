use anchor_lang::prelude::*;

declare_id!("9Ub23SJJRWWXRtPYEk57xwS98k73dWeXok9fpHbHjzYT");

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

