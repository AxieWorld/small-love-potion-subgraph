// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BreedingPotionCheckpoint extends ethereum.Event {
  get params(): BreedingPotionCheckpoint__Params {
    return new BreedingPotionCheckpoint__Params(this);
  }
}

export class BreedingPotionCheckpoint__Params {
  _event: BreedingPotionCheckpoint;

  constructor(event: BreedingPotionCheckpoint) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MinterAdded extends ethereum.Event {
  get params(): MinterAdded__Params {
    return new MinterAdded__Params(this);
  }
}

export class MinterAdded__Params {
  _event: MinterAdded;

  constructor(event: MinterAdded) {
    this._event = event;
  }

  get _minter(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MinterRemoved extends ethereum.Event {
  get params(): MinterRemoved__Params {
    return new MinterRemoved__Params(this);
  }
}

export class MinterRemoved__Params {
  _event: MinterRemoved;

  constructor(event: MinterRemoved) {
    this._event = event;
  }

  get _minter(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }
}

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get _oldAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AdminRemoved extends ethereum.Event {
  get params(): AdminRemoved__Params {
    return new AdminRemoved__Params(this);
  }
}

export class AdminRemoved__Params {
  _event: AdminRemoved;

  constructor(event: AdminRemoved) {
    this._event = event;
  }

  get _oldAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SLP__getCheckpointResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class SLP extends ethereum.SmartContract {
  static bind(address: Address): SLP {
    return new SLP("SLP", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  approve(_spender: Address, _value: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_approve(_spender: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transferFrom(_from: Address, _to: Address, _value: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_value)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    _from: Address,
    _to: Address,
    _value: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  minter(param0: Address): boolean {
    let result = super.call("minter", "minter(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_minter(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("minter", "minter(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getCheckpoint(_owner: Address): SLP__getCheckpointResult {
    let result = super.call(
      "getCheckpoint",
      "getCheckpoint(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(_owner)]
    );

    return new SLP__getCheckpointResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getCheckpoint(
    _owner: Address
  ): ethereum.CallResult<SLP__getCheckpointResult> {
    let result = super.tryCall(
      "getCheckpoint",
      "getCheckpoint(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(_owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SLP__getCheckpointResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  mint(_to: Address, _value: BigInt): boolean {
    let result = super.call("mint", "mint(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_mint(_to: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("mint", "mint(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  burn(_value: BigInt): boolean {
    let result = super.call("burn", "burn(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_burn(_value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("burn", "burn(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  cappedSupply(): BigInt {
    let result = super.call("cappedSupply", "cappedSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_cappedSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("cappedSupply", "cappedSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(param0: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  burnFrom(_from: Address, _value: BigInt): boolean {
    let result = super.call("burnFrom", "burnFrom(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_from),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_burnFrom(_from: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("burnFrom", "burnFrom(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_from),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  minters(param0: BigInt): Address {
    let result = super.call("minters", "minters(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_minters(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("minters", "minters(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  dailyPotionLimit(): BigInt {
    let result = super.call(
      "dailyPotionLimit",
      "dailyPotionLimit():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_dailyPotionLimit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "dailyPotionLimit",
      "dailyPotionLimit():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  transfer(_to: Address, _value: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(_to: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMinter(_addr: Address): boolean {
    let result = super.call("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(_addr)
    ]);

    return result[0].toBoolean();
  }

  try_isMinter(_addr: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(_addr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  approveAndCall(_spender: Address, _value: BigInt, _data: Bytes): boolean {
    let result = super.call(
      "approveAndCall",
      "approveAndCall(address,uint256,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_value),
        ethereum.Value.fromBytes(_data)
      ]
    );

    return result[0].toBoolean();
  }

  try_approveAndCall(
    _spender: Address,
    _value: BigInt,
    _data: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "approveAndCall",
      "approveAndCall(address,uint256,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_value),
        ethereum.Value.fromBytes(_data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  checkpoint(
    _owner: Address,
    _amount: BigInt,
    _createdAt: BigInt,
    _signature: Bytes
  ): BigInt {
    let result = super.call(
      "checkpoint",
      "checkpoint(address,uint256,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromUnsignedBigInt(_createdAt),
        ethereum.Value.fromBytes(_signature)
      ]
    );

    return result[0].toBigInt();
  }

  try_checkpoint(
    _owner: Address,
    _amount: BigInt,
    _createdAt: BigInt,
    _signature: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "checkpoint",
      "checkpoint(address,uint256,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromUnsignedBigInt(_createdAt),
        ethereum.Value.fromBytes(_signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowance(param0: Address, param1: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBigInt();
  }

  try_allowance(param0: Address, param1: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class NameCall extends ethereum.Call {
  get inputs(): NameCall__Inputs {
    return new NameCall__Inputs(this);
  }

  get outputs(): NameCall__Outputs {
    return new NameCall__Outputs(this);
  }
}

export class NameCall__Inputs {
  _call: NameCall;

  constructor(call: NameCall) {
    this._call = call;
  }
}

export class NameCall__Outputs {
  _call: NameCall;

  constructor(call: NameCall) {
    this._call = call;
  }

  get value0(): string {
    return this._call.outputValues[0].value.toString();
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TotalSupplyCall extends ethereum.Call {
  get inputs(): TotalSupplyCall__Inputs {
    return new TotalSupplyCall__Inputs(this);
  }

  get outputs(): TotalSupplyCall__Outputs {
    return new TotalSupplyCall__Outputs(this);
  }
}

export class TotalSupplyCall__Inputs {
  _call: TotalSupplyCall;

  constructor(call: TotalSupplyCall) {
    this._call = call;
  }
}

export class TotalSupplyCall__Outputs {
  _call: TotalSupplyCall;

  constructor(call: TotalSupplyCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetDailyPotionLimitCall extends ethereum.Call {
  get inputs(): SetDailyPotionLimitCall__Inputs {
    return new SetDailyPotionLimitCall__Inputs(this);
  }

  get outputs(): SetDailyPotionLimitCall__Outputs {
    return new SetDailyPotionLimitCall__Outputs(this);
  }
}

export class SetDailyPotionLimitCall__Inputs {
  _call: SetDailyPotionLimitCall;

  constructor(call: SetDailyPotionLimitCall) {
    this._call = call;
  }

  get _dailyPotionLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDailyPotionLimitCall__Outputs {
  _call: SetDailyPotionLimitCall;

  constructor(call: SetDailyPotionLimitCall) {
    this._call = call;
  }
}

export class CheckpointAndCallCall extends ethereum.Call {
  get inputs(): CheckpointAndCallCall__Inputs {
    return new CheckpointAndCallCall__Inputs(this);
  }

  get outputs(): CheckpointAndCallCall__Outputs {
    return new CheckpointAndCallCall__Outputs(this);
  }
}

export class CheckpointAndCallCall__Inputs {
  _call: CheckpointAndCallCall;

  constructor(call: CheckpointAndCallCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _createdAt(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _signature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _spender(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _approvedAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class CheckpointAndCallCall__Outputs {
  _call: CheckpointAndCallCall;

  constructor(call: CheckpointAndCallCall) {
    this._call = call;
  }

  get _balance(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DecimalsCall extends ethereum.Call {
  get inputs(): DecimalsCall__Inputs {
    return new DecimalsCall__Inputs(this);
  }

  get outputs(): DecimalsCall__Outputs {
    return new DecimalsCall__Outputs(this);
  }
}

export class DecimalsCall__Inputs {
  _call: DecimalsCall;

  constructor(call: DecimalsCall) {
    this._call = call;
  }
}

export class DecimalsCall__Outputs {
  _call: DecimalsCall;

  constructor(call: DecimalsCall) {
    this._call = call;
  }

  get value0(): i32 {
    return this._call.outputValues[0].value.toI32();
  }
}

export class MinterCall extends ethereum.Call {
  get inputs(): MinterCall__Inputs {
    return new MinterCall__Inputs(this);
  }

  get outputs(): MinterCall__Outputs {
    return new MinterCall__Outputs(this);
  }
}

export class MinterCall__Inputs {
  _call: MinterCall;

  constructor(call: MinterCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class MinterCall__Outputs {
  _call: MinterCall;

  constructor(call: MinterCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class GetCheckpointCall extends ethereum.Call {
  get inputs(): GetCheckpointCall__Inputs {
    return new GetCheckpointCall__Inputs(this);
  }

  get outputs(): GetCheckpointCall__Outputs {
    return new GetCheckpointCall__Outputs(this);
  }
}

export class GetCheckpointCall__Inputs {
  _call: GetCheckpointCall;

  constructor(call: GetCheckpointCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GetCheckpointCall__Outputs {
  _call: GetCheckpointCall;

  constructor(call: GetCheckpointCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get _createdAt(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get _success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class PausedCall extends ethereum.Call {
  get inputs(): PausedCall__Inputs {
    return new PausedCall__Inputs(this);
  }

  get outputs(): PausedCall__Outputs {
    return new PausedCall__Outputs(this);
  }
}

export class PausedCall__Inputs {
  _call: PausedCall;

  constructor(call: PausedCall) {
    this._call = call;
  }
}

export class PausedCall__Outputs {
  _call: PausedCall;

  constructor(call: PausedCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RemoveMintersCall extends ethereum.Call {
  get inputs(): RemoveMintersCall__Inputs {
    return new RemoveMintersCall__Inputs(this);
  }

  get outputs(): RemoveMintersCall__Outputs {
    return new RemoveMintersCall__Outputs(this);
  }
}

export class RemoveMintersCall__Inputs {
  _call: RemoveMintersCall;

  constructor(call: RemoveMintersCall) {
    this._call = call;
  }

  get _removedMinters(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class RemoveMintersCall__Outputs {
  _call: RemoveMintersCall;

  constructor(call: RemoveMintersCall) {
    this._call = call;
  }
}

export class CappedSupplyCall extends ethereum.Call {
  get inputs(): CappedSupplyCall__Inputs {
    return new CappedSupplyCall__Inputs(this);
  }

  get outputs(): CappedSupplyCall__Outputs {
    return new CappedSupplyCall__Outputs(this);
  }
}

export class CappedSupplyCall__Inputs {
  _call: CappedSupplyCall;

  constructor(call: CappedSupplyCall) {
    this._call = call;
  }
}

export class CappedSupplyCall__Outputs {
  _call: CappedSupplyCall;

  constructor(call: CappedSupplyCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class BalanceOfCall extends ethereum.Call {
  get inputs(): BalanceOfCall__Inputs {
    return new BalanceOfCall__Inputs(this);
  }

  get outputs(): BalanceOfCall__Outputs {
    return new BalanceOfCall__Outputs(this);
  }
}

export class BalanceOfCall__Inputs {
  _call: BalanceOfCall;

  constructor(call: BalanceOfCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class BalanceOfCall__Outputs {
  _call: BalanceOfCall;

  constructor(call: BalanceOfCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class AddMintersCall extends ethereum.Call {
  get inputs(): AddMintersCall__Inputs {
    return new AddMintersCall__Inputs(this);
  }

  get outputs(): AddMintersCall__Outputs {
    return new AddMintersCall__Outputs(this);
  }
}

export class AddMintersCall__Inputs {
  _call: AddMintersCall;

  constructor(call: AddMintersCall) {
    this._call = call;
  }

  get _addedMinters(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class AddMintersCall__Outputs {
  _call: AddMintersCall;

  constructor(call: AddMintersCall) {
    this._call = call;
  }
}

export class BurnFromCall extends ethereum.Call {
  get inputs(): BurnFromCall__Inputs {
    return new BurnFromCall__Inputs(this);
  }

  get outputs(): BurnFromCall__Outputs {
    return new BurnFromCall__Outputs(this);
  }
}

export class BurnFromCall__Inputs {
  _call: BurnFromCall;

  constructor(call: BurnFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BurnFromCall__Outputs {
  _call: BurnFromCall;

  constructor(call: BurnFromCall) {
    this._call = call;
  }

  get _success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class MintersCall extends ethereum.Call {
  get inputs(): MintersCall__Inputs {
    return new MintersCall__Inputs(this);
  }

  get outputs(): MintersCall__Outputs {
    return new MintersCall__Outputs(this);
  }
}

export class MintersCall__Inputs {
  _call: MintersCall;

  constructor(call: MintersCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintersCall__Outputs {
  _call: MintersCall;

  constructor(call: MintersCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DailyPotionLimitCall extends ethereum.Call {
  get inputs(): DailyPotionLimitCall__Inputs {
    return new DailyPotionLimitCall__Inputs(this);
  }

  get outputs(): DailyPotionLimitCall__Outputs {
    return new DailyPotionLimitCall__Outputs(this);
  }
}

export class DailyPotionLimitCall__Inputs {
  _call: DailyPotionLimitCall;

  constructor(call: DailyPotionLimitCall) {
    this._call = call;
  }
}

export class DailyPotionLimitCall__Outputs {
  _call: DailyPotionLimitCall;

  constructor(call: DailyPotionLimitCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ChangeAdminCall extends ethereum.Call {
  get inputs(): ChangeAdminCall__Inputs {
    return new ChangeAdminCall__Inputs(this);
  }

  get outputs(): ChangeAdminCall__Outputs {
    return new ChangeAdminCall__Outputs(this);
  }
}

export class ChangeAdminCall__Inputs {
  _call: ChangeAdminCall;

  constructor(call: ChangeAdminCall) {
    this._call = call;
  }

  get _newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeAdminCall__Outputs {
  _call: ChangeAdminCall;

  constructor(call: ChangeAdminCall) {
    this._call = call;
  }
}

export class SymbolCall extends ethereum.Call {
  get inputs(): SymbolCall__Inputs {
    return new SymbolCall__Inputs(this);
  }

  get outputs(): SymbolCall__Outputs {
    return new SymbolCall__Outputs(this);
  }
}

export class SymbolCall__Inputs {
  _call: SymbolCall;

  constructor(call: SymbolCall) {
    this._call = call;
  }
}

export class SymbolCall__Outputs {
  _call: SymbolCall;

  constructor(call: SymbolCall) {
    this._call = call;
  }

  get value0(): string {
    return this._call.outputValues[0].value.toString();
  }
}

export class RemoveAdminCall extends ethereum.Call {
  get inputs(): RemoveAdminCall__Inputs {
    return new RemoveAdminCall__Inputs(this);
  }

  get outputs(): RemoveAdminCall__Outputs {
    return new RemoveAdminCall__Outputs(this);
  }
}

export class RemoveAdminCall__Inputs {
  _call: RemoveAdminCall;

  constructor(call: RemoveAdminCall) {
    this._call = call;
  }
}

export class RemoveAdminCall__Outputs {
  _call: RemoveAdminCall;

  constructor(call: RemoveAdminCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get _success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IsMinterCall extends ethereum.Call {
  get inputs(): IsMinterCall__Inputs {
    return new IsMinterCall__Inputs(this);
  }

  get outputs(): IsMinterCall__Outputs {
    return new IsMinterCall__Outputs(this);
  }
}

export class IsMinterCall__Inputs {
  _call: IsMinterCall;

  constructor(call: IsMinterCall) {
    this._call = call;
  }

  get _addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class IsMinterCall__Outputs {
  _call: IsMinterCall;

  constructor(call: IsMinterCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ApproveAndCallCall extends ethereum.Call {
  get inputs(): ApproveAndCallCall__Inputs {
    return new ApproveAndCallCall__Inputs(this);
  }

  get outputs(): ApproveAndCallCall__Outputs {
    return new ApproveAndCallCall__Outputs(this);
  }
}

export class ApproveAndCallCall__Inputs {
  _call: ApproveAndCallCall;

  constructor(call: ApproveAndCallCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ApproveAndCallCall__Outputs {
  _call: ApproveAndCallCall;

  constructor(call: ApproveAndCallCall) {
    this._call = call;
  }

  get _success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class CheckpointCall extends ethereum.Call {
  get inputs(): CheckpointCall__Inputs {
    return new CheckpointCall__Inputs(this);
  }

  get outputs(): CheckpointCall__Outputs {
    return new CheckpointCall__Outputs(this);
  }
}

export class CheckpointCall__Inputs {
  _call: CheckpointCall;

  constructor(call: CheckpointCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _createdAt(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _signature(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class CheckpointCall__Outputs {
  _call: CheckpointCall;

  constructor(call: CheckpointCall) {
    this._call = call;
  }

  get _balance(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class AllowanceCall extends ethereum.Call {
  get inputs(): AllowanceCall__Inputs {
    return new AllowanceCall__Inputs(this);
  }

  get outputs(): AllowanceCall__Outputs {
    return new AllowanceCall__Outputs(this);
  }
}

export class AllowanceCall__Inputs {
  _call: AllowanceCall;

  constructor(call: AllowanceCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AllowanceCall__Outputs {
  _call: AllowanceCall;

  constructor(call: AllowanceCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ApproveAndCallPayableCall extends ethereum.Call {
  get inputs(): ApproveAndCallPayableCall__Inputs {
    return new ApproveAndCallPayableCall__Inputs(this);
  }

  get outputs(): ApproveAndCallPayableCall__Outputs {
    return new ApproveAndCallPayableCall__Outputs(this);
  }
}

export class ApproveAndCallPayableCall__Inputs {
  _call: ApproveAndCallPayableCall;

  constructor(call: ApproveAndCallPayableCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ApproveAndCallPayableCall__Outputs {
  _call: ApproveAndCallPayableCall;

  constructor(call: ApproveAndCallPayableCall) {
    this._call = call;
  }

  get _success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class AdminCall extends ethereum.Call {
  get inputs(): AdminCall__Inputs {
    return new AdminCall__Inputs(this);
  }

  get outputs(): AdminCall__Outputs {
    return new AdminCall__Outputs(this);
  }
}

export class AdminCall__Inputs {
  _call: AdminCall;

  constructor(call: AdminCall) {
    this._call = call;
  }
}

export class AdminCall__Outputs {
  _call: AdminCall;

  constructor(call: AdminCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _dailyPotionLimit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}