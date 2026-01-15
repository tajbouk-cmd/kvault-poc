use anchor_lang::prelude::*;

declare_id!("7Ge1zXtuwK8zQi3j23bocHPhx55VpkK5GBuNZC8Qrzj");

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
