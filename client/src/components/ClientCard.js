export const ClientCard = ({
    firstName,
    secondName,
    familyName,
    idCardNumber,
    address,
    bulgarianEgn
}) => {
    return(
        <li>
            {firstName} {secondName} {familyName}, ID: {idCardNumber}, Address: {address}, EGN: {bulgarianEgn}
            <button>Edit</button>
            <button>Delete</button>
        </li>
    )
}