import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";
actor Token {
    let owner : Principal = Principal.fromText("ogwgi-tean6-romse-qco7p-mywk4-2pvc4-7jfna-okwmm-7t43k-goqkx-pae");
    let totalSupply : Nat = 1000000000;
    let symbol : Text = "AlphaCoin";

    private stable var balanceEntries : [(Principal, Nat)] = [];

    private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

    public query func Balance(name : Principal) : async Nat {
        let balance : Nat = switch (balances.get(name)) {
            case null 0;
            case (?result) result;
        };

        return balance;
    };

    public query func getSymbol() : async Text {
        return symbol;
    };

    public shared (msg) func putMon() : async Text {
        Debug.print(debug_show (msg.caller));
        let check : Nat = await Balance(msg.caller);
        if (check == 0) {
            let result = await transfer(msg.caller, 10000);
            return result;
        } else {
            return "Already taken";
        };
    };

    public shared (msg) func transfer(to : Principal, amount : Nat) : async Text {
        Debug.print(debug_show (msg.caller));
        let check1 : Nat = await Balance(msg.caller);
        if (check1 > amount) {
            balances.put(msg.caller, check1 - amount);
            let check2 = await Balance(to);
            balances.put(to, check2 +amount);
            return "Success";
        } else {
            return "Not enough Funds";
        };
    };

    system func preupgrade() {
        balanceEntries := Iter.toArray(balances.entries());
    };

    system func postupgrade() {
        balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(), 1, Principal.equal, Principal.hash);
        if (balances.size() < 1) {
            balances.put(owner, totalSupply);
        };
    };
};
