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
import { ExampleEntity } from "../generated/schema"

export function handleAddCredit(event: AddCredit): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.credit = event.params.credit
  entity.job = event.params.job

  // Entities can be written to the store with `.save()`
  entity.save()

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
}

export function handleApplyCredit(event: ApplyCredit): void {}

export function handleApproval(event: Approval): void {}

export function handleDelegateChanged(event: DelegateChanged): void {}

export function handleDelegateVotesChanged(event: DelegateVotesChanged): void {}

export function handleJobAdded(event: JobAdded): void {}

export function handleJobRemoved(event: JobRemoved): void {}

export function handleKeeperBonded(event: KeeperBonded): void {}

export function handleKeeperBonding(event: KeeperBonding): void {}

export function handleKeeperDispute(event: KeeperDispute): void {}

export function handleKeeperResolved(event: KeeperResolved): void {}

export function handleKeeperSlashed(event: KeeperSlashed): void {}

export function handleKeeperUnbonding(event: KeeperUnbonding): void {}

export function handleKeeperUnbound(event: KeeperUnbound): void {}

export function handleKeeperWorked(event: KeeperWorked): void {}

export function handleRemoveJob(event: RemoveJob): void {}

export function handleSubmitJob(event: SubmitJob): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnbondJob(event: UnbondJob): void {}
