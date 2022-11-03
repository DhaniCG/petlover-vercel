import { useParams, Link, useNavigate } from "react-router-dom";
import { data } from "../data";

export default function PetInfo() {
    const { id } = useParams();
    const navigate = useNavigate()
    const index = data.findIndex(dataId => dataId.id === id);
    const currentData = data[index];

    return (
        <>
        <Link to={navigate(-1)} id="back">&#60; Back</Link>
        <div id="info">
            <img src={currentData.pic ? currentData.pic : "/image-not-found-icon.svg"} alt={currentData.type} />
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{currentData.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{currentData.age} Year old</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{currentData.type}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{currentData.description}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    );
}

