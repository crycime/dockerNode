import { ethers } from "ethers";

const regexBytes = new RegExp("^bytes([0-9]+)$");
const regexNumber = new RegExp("^(u?int)([0-9]*)$");
const regexArray = new RegExp("^(.*)\\[([0-9]*)\\]$");

function _pack(type: any, value: any, isArray?: boolean): any {
    switch (type) {
        case "address":
            if (isArray) {
                return ethers.getBytes(ethers.hexlify(value));
            }
            return ethers.getBytes(ethers.getAddress(value));
        case "string":
            return ethers.toUtf8Bytes(value);
        case "bytes":
            return ethers.getBytes(value);
        case "bool":
            value = (!!value ? "0x01" : "0x00");
            if (isArray) {
                return ethers.getBytes(ethers.hexlify(value));
            }
            return ethers.getBytes(value);
    }
    let match = type.match(regexNumber);
    if (match) {
        let signed = (match[1] === "int");
        let size = parseInt(match[2] || "256");
        ethers.assertArgument((!match[2] || match[2] === String(size)) && (size % 8 === 0) && size !== 0 && size <= 256, "invalid number type", "type", type);
        if (isArray) {
            size = 256;
        }
        if (signed) {
            value = ethers.toTwos(value, size);
        }
        ethers.zeroPadValue(ethers.toBeArray(value), size / 8);
        let hexValue = ethers.hexlify(ethers.toBeArray(value));
        hexValue = ethers.hexlify(ethers.toBeArray(hexValue.length-2)) + hexValue.substring(2);
        return ethers.getBytes(hexValue);
    }
    match = type.match(regexBytes);
    if (match) {
        const size = parseInt(match[1]);
        ethers.assertArgument(String(size) === match[1] && size !== 0 && size <= 32, "invalid bytes type", "type", type);
        ethers.assertArgument( ethers.dataLength(value) === size, `invalid value for ${type}`, "value", value);
        if (isArray) {
            return  ethers.getBytes(ethers.hexlify(value));
        }
        return value;
    }
    match = type.match(regexArray);
    if (match && Array.isArray(value)) {
        const baseType = match[1];
        const count = parseInt(match[2] || String(value.length));
        ethers.assertArgument(count === value.length, `invalid array length for ${type}`, "value", value);
        let result: any[] = [];
        value.forEach(function (value) {
            result.push(_pack(baseType, value, true));
        });
        return ethers.getBytes(ethers.concat(result));
    }
    ethers.assertArgument(false, "invalid type", "type", type);
}

export function packed(types: any[], values: any[]) {
    if(types.length !== values.length) {
        throw new Error(`wrong number of values; expected ${ types.length } values: ${values}`);
    }

    let tight: any[] = [];
    types.forEach(function (types, index) {
        tight.push(_pack(types, values[index]));
    });
    return ethers.hexlify(ethers.concat(tight));
};