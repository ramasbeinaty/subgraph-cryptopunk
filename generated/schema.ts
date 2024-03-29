// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Assign extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("punk", Value.fromString(""));
    this.set("user", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Assign entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Assign must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Assign", id.toString(), this);
    }
  }

  static load(id: string): Assign | null {
    return changetype<Assign | null>(store.get("Assign", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get punk(): string {
    let value = this.get("punk");
    return value!.toString();
  }

  set punk(value: string) {
    this.set("punk", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Punk extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("creationTime", Value.fromBigInt(BigInt.zero()));
    this.set("creator", Value.fromString(""));
    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Punk entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Punk must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Punk", id.toString(), this);
    }
  }

  static load(id: string): Punk | null {
    return changetype<Punk | null>(store.get("Punk", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creationTime(): BigInt {
    let value = this.get("creationTime");
    return value!.toBigInt();
  }

  set creationTime(value: BigInt) {
    this.set("creationTime", Value.fromBigInt(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ownedPunks(): Array<string> {
    let value = this.get("ownedPunks");
    return value!.toStringArray();
  }

  set ownedPunks(value: Array<string>) {
    this.set("ownedPunks", Value.fromStringArray(value));
  }

  get madePunks(): Array<string> {
    let value = this.get("madePunks");
    return value!.toStringArray();
  }

  set madePunks(value: Array<string>) {
    this.set("madePunks", Value.fromStringArray(value));
  }
}

export class PunkBought extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("punk", Value.fromString(""));
    this.set("buyer", Value.fromString(""));
    this.set("seller", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PunkBought entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PunkBought must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PunkBought", id.toString(), this);
    }
  }

  static load(id: string): PunkBought | null {
    return changetype<PunkBought | null>(store.get("PunkBought", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get punk(): string {
    let value = this.get("punk");
    return value!.toString();
  }

  set punk(value: string) {
    this.set("punk", Value.fromString(value));
  }

  get buyer(): string {
    let value = this.get("buyer");
    return value!.toString();
  }

  set buyer(value: string) {
    this.set("buyer", Value.fromString(value));
  }

  get seller(): string {
    let value = this.get("seller");
    return value!.toString();
  }

  set seller(value: string) {
    this.set("seller", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class PunkTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("from", Value.fromString(""));
    this.set("to", Value.fromString(""));
    this.set("punk", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PunkTransfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PunkTransfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PunkTransfer", id.toString(), this);
    }
  }

  static load(id: string): PunkTransfer | null {
    return changetype<PunkTransfer | null>(store.get("PunkTransfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get punk(): string {
    let value = this.get("punk");
    return value!.toString();
  }

  set punk(value: string) {
    this.set("punk", Value.fromString(value));
  }
}
