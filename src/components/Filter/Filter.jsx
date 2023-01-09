import PropTypes from "prop-types";
import { Input, Label } from "./Filter.style";

export const Filter = ({ filter, findFilterInput }) => (
    <Label> 🕵️‍♂️
        <Input
            type="text"
            name={filter}
            onChange={findFilterInput}
            placeholder="Find contacts by name"
        />
    </Label>
);

Filter.prototype = {
    filter: PropTypes.string.isRequired,
    findFilterInput: PropTypes.func.isRequired
}

