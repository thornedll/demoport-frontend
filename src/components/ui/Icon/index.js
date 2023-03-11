import { icons } from "../../../img"

const Icon = ({ name }) => (
    <svg width="19" height="18" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
        <use href={`${icons}#${name}`} />
    </svg>
);

export default Icon;