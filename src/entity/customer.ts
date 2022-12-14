class Customer {

    _id: string;
    _name: string;
    _address!: Address;
    _active: boolean = true;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }

    validate() {
        if (!this._name.length) {
            throw new Error("Name is required")
        }
 
        if (!this._id.length) {
            throw new Error("Id is required")
        }
    }

    changeName(name: string) {
        this._name = name;
    }

    activate() {
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }
 
    set Address(address: Address) {
        this._address = address
    }

}