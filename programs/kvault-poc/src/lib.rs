use anchor_lang::prelude::*;

declare_id!("3Yo3P5GdTDPTaa6ZNebawVUACLXqW1nB6MhAH5TX1s5z");

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
