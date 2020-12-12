import { BigInt } from "@graphprotocol/graph-ts"
import {
  kp3r,
  AddCredit,
  ApplyCredit,
  Approval,
  DelegateChanged,
  DelegateVotesChanged,
  JobAdded,
  JobRemoved,
  KeeperBonded,
  KeeperBonding,
  KeeperDispute,
  KeeperResolved,
  KeeperSlashed,
  KeeperUnbonding,
  KeeperUnbound,
  KeeperWorked,
  RemoveJob,
  SubmitJob,
  Transfer,
  UnbondJob
} from "../generated/kp3r/kp3r"
import { jobAdded, jobRemoved, transfer, keeperBonded, keeperBonding, info } from "../generated/schema"
  
export function handleAddCredit(event: AddCredit): void {}

export function handleTransfer(event: Transfer): void {
  let entity = transfer.load(event.transaction.hash.toHex())
    if (entity == null ){
    entity = new transfer(event.transaction.hash.toHex())
    entity.send = event.params.from.toHex()
    entity.receive = event.params.to.toHex()
    entity.amount = event.params.amount
    entity.save()
  }
}


export function handleJobAdded(event: JobAdded): void {
  
  
  let inf = info.load('0')
  if (inf == null){
    inf = new info('0')
    inf.totalAddJobs = BigInt.fromI32(0)
    inf.totalCurrentJobs = BigInt.fromI32(0)
    inf.totalRemoveJobs = BigInt.fromI32(0)
  } 
  

  let entity = jobAdded.load(event.transaction.hash.toHex())
    if (entity == null ){
      entity = new jobAdded(event.transaction.hash.toHex())
      entity.jobContract = event.params.job
      entity.startBlock = event.params.block
      inf.totalAddJobs = inf.totalAddJobs+BigInt.fromI32(1)
      inf.totalCurrentJobs = inf.totalCurrentJobs+BigInt.fromI32(1)
      entity.save()
  }
  inf.save()
}

export function handleJobRemoved(event: JobRemoved): void {
  let inf = info.load('0')
  if (inf == null){
    inf = new info('0')
    
    inf.totalRemoveJobs = BigInt.fromI32(0)
    inf.totalCurrentJobs = BigInt.fromI32(0)
  } 
  
  let entity = jobRemoved.load(event.transaction.hash.toHex())
    if (entity == null ){
      entity = new jobRemoved(event.transaction.hash.toHex())
      entity.jobContract = event.params.job
      entity.removeBlock = event.params.block
      inf.totalRemoveJobs = inf.totalRemoveJobs+BigInt.fromI32(1)
      inf.totalCurrentJobs = inf.totalCurrentJobs-BigInt.fromI32(1)
      entity.save()
  }
  inf.save()
}

export function handleKeeperBonded(event: KeeperBonded): void {
  
  let entity = keeperBonded.load(event.transaction.hash.toHex())
    if (entity == null ){
      entity = new keeperBonded(event.transaction.hash.toHex())
      entity.keeperAddress = event.params.keeper
      entity.startBlock = event.params.block
      entity.activatedTimestamp = event.params.activated
      entity.bondBalance = event.params.bond
      entity.save()
  }
}


export function handleKeeperBonding(event: KeeperBonding): void {
  
  let entity = keeperBonding.load(event.transaction.hash.toHex())
  if (entity == null ){
    entity = new keeperBonding(event.transaction.hash.toHex())
    entity.keeperAddress = event.params.keeper
    entity.startBlock = event.params.block
    entity.activeTimestamp = event.params.active
    entity.bondBalance = event.params.bond
    entity.save()
}
}








export function handleApplyCredit(event: ApplyCredit): void {}

export function handleApproval(event: Approval): void {}

export function handleDelegateChanged(event: DelegateChanged): void {}

export function handleDelegateVotesChanged(event: DelegateVotesChanged): void {}

export function handleKeeperDispute(event: KeeperDispute): void {}

export function handleKeeperResolved(event: KeeperResolved): void {}

export function handleKeeperSlashed(event: KeeperSlashed): void {}

export function handleKeeperUnbonding(event: KeeperUnbonding): void {}

export function handleKeeperUnbound(event: KeeperUnbound): void {}

export function handleKeeperWorked(event: KeeperWorked): void {}

export function handleRemoveJob(event: RemoveJob): void {}

export function handleSubmitJob(event: SubmitJob): void {}

export function handleUnbondJob(event: UnbondJob): void {}

// Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.BASE(...)
  // - contract.BOND(...)
  // - contract.DELEGATION_TYPEHASH(...)
  // - contract.DOMAINSEPARATOR(...)
  // - contract.DOMAIN_TYPEHASH(...)
  // - contract.ETH(...)
  // - contract.FEE(...)
  // - contract.KPRH(...)
  // - contract.LIQUIDITYBOND(...)
  // - contract.PERMIT_TYPEHASH(...)
  // - contract.UNBOND(...)
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.balanceOf(...)
  // - contract.blacklist(...)
  // - contract.bondings(...)
  // - contract.bonds(...)
  // - contract.checkpoints(...)
  // - contract.credits(...)
  // - contract.decimals(...)
  // - contract.delegates(...)
  // - contract.disputes(...)
  // - contract.firstSeen(...)
  // - contract.getCurrentVotes(...)
  // - contract.getJobs(...)
  // - contract.getKeepers(...)
  // - contract.getPriorVotes(...)
  // - contract.governance(...)
  // - contract.isBondedKeeper(...)
  // - contract.isKeeper(...)
  // - contract.isMinKeeper(...)
  // - contract.jobList(...)
  // - contract.jobProposalDelay(...)
  // - contract.jobs(...)
  // - contract.keeperList(...)
  // - contract.keepers(...)
  // - contract.lastJob(...)
  // - contract.liquidityAccepted(...)
  // - contract.liquidityAmount(...)
  // - contract.liquidityAmountsUnbonding(...)
  // - contract.liquidityApplied(...)
  // - contract.liquidityPairs(...)
  // - contract.liquidityProvided(...)
  // - contract.liquidityUnbonding(...)
  // - contract.name(...)
  // - contract.nonces(...)
  // - contract.numCheckpoints(...)
  // - contract.pairs(...)
  // - contract.partialUnbonding(...)
  // - contract.pendingGovernance(...)
  // - contract.pendingbonds(...)
  // - contract.symbol(...)
  // - contract.totalBonded(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.unbondings(...)
  // - contract.votes(...)
  // - contract.workCompleted(...)
