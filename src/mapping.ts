import {
  Assign as AssignEvent,
  PunkTransfer as PunkTransferEvent,
  PunkBought as PunkBoughtEvent,
} from "../generated/CryptoPunks/CryptoPunks"
import {
  Assign,
  PunkTransfer,
  PunkBought,
  User,
  Punk
} from "../generated/schema"

export function handleAssign(event: AssignEvent): void {
  const userAddress = event.params.to.toHexString();
  const timestamp = event.block.timestamp;
  const punkId = event.params.punkIndex.toString();

  let user = User.load(userAddress);
  if (!user){
    user = new User(userAddress);
    user.save();
  }

  let assign = Assign.load(punkId);
  if (!assign){
    assign = new Assign(punkId);
    assign.punk = punkId;
    assign.user = userAddress;
    assign.timestamp = timestamp;
    assign.save();
  }

  let punk = Punk.load(punkId);
  if (!punk){
    punk = new Punk(punkId);
    punk.creationTime = timestamp;
    punk.creator = userAddress;
    punk.owner = userAddress;
    punk.save();
  }
}

export function handlePunkTransfer(event: PunkTransferEvent): void {
  const to = event.params.to.toHexString();
  const from = event.params.from.toHexString();
  const punkId = event.params.punkIndex.toString();
  const hash = event.transaction.hash.toHexString();

  let punk: Punk | null = Punk.load(punkId);
  if (punk){
    punk.owner = to;
    punk.save();
  }

  let user = User.load(to);
  if (!user){
    user = new User(to);
    user.save();
  }

  let punkTransfer = new PunkTransfer(hash)
  punkTransfer.from = from;
  punkTransfer.to = to;
  punkTransfer.punk = punkId;
  punkTransfer.save();
}


export function handlePunkBought(event: PunkBoughtEvent): void {
  const to = event.params.toAddress.toHexString();
  const from = event.params.fromAddress.toHexString();
  const punkId = event.params.punkIndex.toString();
  const amount = event.params.value;
  const hash = event.transaction.hash.toHexString();
  const timestamp = event.block.timestamp;

  let punkBought = new PunkBought(hash);
  punkBought.punk = punkId;
  punkBought.buyer = to;
  punkBought.seller = from;
  punkBought.amount = amount;
  punkBought.timestamp = timestamp;
  punkBought.save()

  let punk: Punk | null = Punk.load(punkId);
  if (punk){
    punk.owner = to;
    punk.save();
  }

  let user = User.load(to);
  if(!user){
    user = new User(to);
    user.save();
  }
}