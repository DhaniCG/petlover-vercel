import { Link, useNavigate, useParams } from "react-router-dom";
import { animalFoods } from "../data";

import "../styles/info.css";

export default function FoodInfo() {
    const { id } = useParams();
    const navigate = useNavigate();
    const index = animalFoods.findIndex(foodId => foodId.id === id);
    const currentData = animalFoods[index];

    return (
        <>
            <Link onClick={() => navigate(-1)} id="back">&#60; Back</Link>{/* Call navigate() inside of a function to prevents from navigate backward 2 times (I think because it works like an unhandled useEffect) */}
            <div id="info">
                <img src={currentData.pic ? currentData.pic : "/image-not-found-icon.svg"} alt={currentData.type} />
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{currentData.name}</td>
                        </tr>
                        <tr>
                            <td>Flavour</td>
                            <td>{currentData.flavour}</td>
                        </tr>
                        <tr>
                            <td>For</td>
                            <td>{currentData.for + " " + currentData.type}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>{currentData.type}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

