class Address {

    _street: string;
    _number: string;
    _zip: string;
    _city: string;

    constructor(street: string, number: string, zip: string, city: string) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;
    }

    validate() {
        if (!this._street.length) {
            throw new Error("street is required")
        }

        if (!this._number.length) {
            throw new Error("Number is required")
        }

        if (!this._zip.length) {
            throw new Error("Zip is required")
        }

        if (!this._city.length) {
            throw new Error("City is required")
        }
    }


}