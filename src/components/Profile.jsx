import { useNavigate } from "react-router-dom";
import expertImage from "../assets/expert.png";

const Profile = () => {

    const navigation = useNavigate();

    const clickHandler = () => {
        navigation("/chat");
    }

    return (
        <div className="w-11/12 max-w-[1000px] mx-auto flex flex-col justify-center h-screen gap-8">

            <img src={expertImage} alt="expert-image" width={150} className="rounded-e-full" />

            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Sahil Lavingia</h2>

                <p className="text-lg text-gray-600">Founder, Gumroad & Flexile</p>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">About</h3>

                <p className="text-[1.1rem] text-gray-600 text-justify">Sahil Lavingia is the founder and CEO of Gumroad. He solo-founded Gumroad in 2011 and raised $10M+ from Kleiner Perkins, Lowercase Capital, First Round Capital, Naval Ravikant, Max Levchin, and others. Prior to starting Gumroad, Sahil was employee #2 at Pinterest. He is also a VC at his rolling fund, shl.vc which invests in early stage companies, including HelloSign (acquired by Dropbox), Lambda School, Figma, Notion, Clubhouse and many more. Lavingia is also author of the book "The Minimalist Entrepreneur".</p>

                <button className="px-[1rem] py-[0.7rem] bg-blue-500 rounded-md font-bold text-white text-lg" onClick={clickHandler}>Chat Now</button>
            </div>
        </div>
    )
}

export default Profile